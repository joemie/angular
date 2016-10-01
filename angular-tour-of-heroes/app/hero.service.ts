import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//WARNING!!!!!!!!!
//MAKE SURE YOU INCLUDE THE ()
//WARNING!!!!!!!!!
@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
