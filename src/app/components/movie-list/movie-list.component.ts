import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit, OnChanges {
  @Input() title?: string;
  @Input({ required: true }) movies!: Movie[];

  ngOnInit(): void {
    console.log('Componente inizializzato');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }
}
