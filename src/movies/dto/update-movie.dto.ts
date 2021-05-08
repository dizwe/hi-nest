import { PartialType } from '@nestjs/mapped-types';
import { createMovieDto } from './create-movie.dto';

//  npm install @nestjs/mapped-types
export class updateMovieDto extends PartialType(createMovieDto) {}