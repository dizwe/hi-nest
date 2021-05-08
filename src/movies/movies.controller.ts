import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { createMovieDto } from './dto/create-movie.dto';
import { updateMovieDto } from "./dto/update-movie.dto";

@Controller('movies') // basic Router
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching... ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number) {
    const movie = this.moviesService.getOne(movieId);
    if(!movie){
      throw new NotFoundException(`movie with ${movieId} Not Found`);
    }
    return movie;
  }

  // 201 Created 가 뜸1
  @Post()
  create(@Body() movieData: createMovieDto) {
    // Body를 받아야 하면 Body라고 명시해야 함(express와 매우 유사)
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    // 여기서 param은 decorater
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: updateMovieDto) {
    // 순서대로 들어가서 밑에 ... 쓰면 key Override 됨!
    return this.moviesService.update(movieId, updateData);
  }
}
