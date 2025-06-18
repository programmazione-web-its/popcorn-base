import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { MovieAltPipe } from '../../pipes/movieAlt.pipe';
import { MoviePosterPipe } from '../../pipes/moviePoster.pipe';
import { MovieService } from '../../services/movie.service';
import { PopcornRatingComponent } from '../popcorn-rating/popcorn-rating.component';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    PopcornRatingComponent,
    RouterLink,
    MovieAltPipe,
    MoviePosterPipe,
    RouterModule,
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  public movieService = inject(MovieService);
  @Input({ required: true }) movie!: Movie;

  // Sostituiti con pipes
  // get posterPath() {
  //   return 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
  // }
  // get posterAlt() {
  //   return 'Poster di ' + this.movie.title;
  // }
}
