import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";

@Controller('movies') // basic Router
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movie_id: string) {
    return `This Will return one Movie with ${movie_id}`;
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching... ${searchingYear}`;
  }

  @Post()
  create(@Body() movieData) {
    // Body를 받아야 하면 Body라고 명시해야 함(express와 매우 유사)
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    // 여기서 param은 decorater
    return 'This will delete a movie';
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    // 순서대로 들어가서 밑에 ... 쓰면 key Override 됨!
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
