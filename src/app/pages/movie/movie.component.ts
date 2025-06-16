import { Component, inject, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieAltPipe } from '../../pipes/movie-alt.pipe';
import { MoviePosterPipe } from '../../pipes/movie-poster.pipe';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MovieAltPipe, MoviePosterPipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  @Input({ required: true }) movieId!: string;

  movieService = inject(MovieService);

  get movie() {
    return this.movieService.getCurrentMovie(parseInt(this.movieId));
  }
}
