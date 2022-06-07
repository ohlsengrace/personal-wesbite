import { Injectable } from '@angular/core';
import { Trait } from './trait';
import { TRAITS } from './trait-options';

@Injectable({
  providedIn: 'root'
})
export class TraitService {

  constructor() { }

  getTraits(): Trait[]{
    return TRAITS;
  }
}
