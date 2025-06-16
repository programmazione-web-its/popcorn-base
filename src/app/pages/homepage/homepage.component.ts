import { Component, inject } from '@angular/core';
import { RandomMovieComponent } from '../../components/random-movie/random-movie.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { ActorListComponent } from '../../components/actor-list/actor-list.component';

import { ActorService } from '../../services/actor.service';
import { DUMMY_MOVIES } from '../../data/dummy-movies';
import { DUMMY_ACTORS } from '../../data/dummy-actors';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RandomMovieComponent, MovieListComponent, ActorListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  movies = DUMMY_MOVIES;
  actors = DUMMY_ACTORS;

  private actorService = inject(ActorService);

  get bestFourMovies() {
    return [...this.movies]
      .sort((a, b) => b.vote_average - a.vote_average)
      .slice(0, 4);
  }

  get bestFourActors() {
    return [...this.actors]
      .map((actor) => this.actorService.normalize(actor))
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 4);
  }
}
