import { Injectable } from '@angular/core';
import { Block } from './block';
import { BLOCKS } from './block-options';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  constructor() { }

  getBlocks(): Block[]{
    return BLOCKS;
  }
}
