import { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { Genres, Genre } from '../../models/utility.models';
import { FormUtilsService } from '../../services/formUtils.service';

import { MovieListComponent } from '../../components/movie-list/movie-list.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MovieListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  genres: Genre[] = [];
  years: string[] = [];
  // private movieService = inject(MovieService);
  private formUtilsService = inject(FormUtilsService);
  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
      this.years.push(year.toString());
    }
    console.log(this.years);
    this.formUtilsService.getGenres().subscribe({
      next: (genres) => {
        if (!genres) return;
        this.genres = genres.genres;
      },
      error: (err) => console.log(err),
    });
  }
}
