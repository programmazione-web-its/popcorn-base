import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RandomMovieComponent } from './components/random-movie/random-movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

import { DUMMY_MOVIES } from './data/dummy-movies';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    RandomMovieComponent,
    MovieListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pop-corn-base';
  movies = DUMMY_MOVIES;
}
