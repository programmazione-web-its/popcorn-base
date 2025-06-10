import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

import { DUMMY_MOVIES } from '../data/dummy-movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movie: Movie | null = null;
  movies = DUMMY_MOVIES;

  getCurrentMovie(id: number): Movie | undefined {
    return this.movies.find((movie) => movie.id === id) || undefined;
  }
}
