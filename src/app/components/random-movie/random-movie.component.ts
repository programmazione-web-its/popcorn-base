import { Component, Input } from '@angular/core';
import { DUMMY_MOVIES } from '../../data/dummy-movies';

const randomIdx = Math.floor(Math.random() * DUMMY_MOVIES.length);

@Component({
  selector: 'app-random-movie',
  standalone: true,
  imports: [],
  templateUrl: './random-movie.component.html',
  styleUrl: './random-movie.component.scss',
})
export class RandomMovieComponent {
  movie = DUMMY_MOVIES[randomIdx];

  onGetRandomMovie() {
    const randomIdx = Math.floor(Math.random() * DUMMY_MOVIES.length);
    console.log(randomIdx);
    this.movie = DUMMY_MOVIES[randomIdx];
  }
}
//
