import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.services';
import { Observable } from 'rxjs';
import {
  Actor,
  ActorMovie,
  ActorTvSerie,
  ActorApiRes,
} from '../models/actor.model';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private apiService = inject(ApiService);
  normalize(actor: any): Actor {
    const known_for = actor.known_for.map((item: any) => {
      if (item.media_type === 'movie') {
        return item as ActorMovie;
      } else {
        return item as ActorTvSerie;
      }
    });

    return {
      ...actor,
      known_for,
    } satisfies Actor;
  }
  getActors(): Observable<ActorApiRes> {
    return this.apiService.getData<ActorApiRes>(
      `person/popular?language=it-IT&page=1`
    );
  }
}
