import { Injectable } from '@angular/core';

import { Actor, ActorMovie, ActorTvSerie } from '../models/actor.model';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
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
}
