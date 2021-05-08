import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { updateMovieDto } from "./dto/update-movie.dto";

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    // +id == parseInt
    return this.movies.find((movie) => movie.id === id);
  }

  deleteOne(id: number): boolean {
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: updateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData }); // Update 처럼 만들기 위함
  }
}
