import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.services';
import { Movie, MovieApiRes } from '../models/movie.model';

import { DUMMY_MOVIES } from '../data/dummy-movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private apiService: ApiService) {}
  movie: Movie | null = null;
  movies = DUMMY_MOVIES;

  getMovies(): Observable<MovieApiRes> {
    return this.apiService.getData<MovieApiRes>(
      `movie/popular?language=en-US&page=1`
    );
  }

  getCurrentMovie(id: number): Movie | undefined {
    return this.movies.find((movie) => movie.id === id) || undefined;
  }
  // UTILS
  getPosterPath(movie: Movie): string {
    return 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  }

  getPosterAlt(movie: Movie): string {
    return 'Poster di ' + movie.title;
  }

  searchMovies(
    query: string,
    include_adult: boolean = false,
    year?: string
  ): Observable<MovieApiRes> {
    const params = new URLSearchParams({
      query,
      include_adult: String(include_adult),
      language: 'en-US',
      page: '1',
    });

    if (year) {
      params.append('year', year);
    }

    return this.apiService.getData<MovieApiRes>(
      `/search/movie?${params.toString()}`
    );
  }
}
