import { Component, OnInit } from '@angular/core';
import { Block } from '../block/block';
import { BlockService } from '../block/block.service';
import { Trait } from '../trait/trait';
import { TraitService } from '../trait/trait.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  traits:Trait[] = [];
  selectedTraits:Trait[] = [];

  blocks:Block[] = [];

  constructor(private traitService: TraitService, private blockService: BlockService) { }

  ngOnInit(): void {
    this.getTraits();
    this.getBlocks();
  }

  getTraits(): void{
    this.traits = this.traitService.getTraits();
  }

  getBlocks(): void{
    this.blocks = this.blockService.getBlocks();
  }

  receiveSelectedTraits($event: Trait[]){
    this.selectedTraits = $event;
  }

  isSelectedBlock(blockTraits:Trait[]): boolean{

    let isSelected:boolean = false;

    // if no selected traits, display all
    if(this.selectedTraits.length == 0){
      return true;
    }
    
    for(let i = 0; i < this.selectedTraits.length; i++){
      for(let j = 0; j < blockTraits.length; j++){
        if(this.selectedTraits[i] == blockTraits[j]){
          isSelected = true;
          break;
        }
      }
    }
    return isSelected;
  }


  isValidTitleLink(block:Block): boolean{
    if(block.titleLink == ''){
      return false;
    }else{
      return true;
    }
  }

  


}
