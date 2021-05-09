import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

// 여기서 import 할 필요없도록 dependency injection 해줌
// NestJs가 MovieService를 import하고 Controller에 inject할거야
// 그래서 service에서 injectable을 해야함
@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}