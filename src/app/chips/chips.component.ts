import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TraitService } from '../trait/trait.service';
import { Trait } from '../trait/trait';

// CHILD COMPONENT TO RESUME COMPONENT

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {

  // Should I import traits from resume component or from trait-options?
  traits:Trait[] = [];
  selectedTraits:Trait[] = [];

  @Output() selectionEvent = new EventEmitter<Trait[]>();

  constructor(private traitService: TraitService) { }

  ngOnInit(): void {
    this.getTraits()
  }

  getTraits(): void{
    this.traits = this.traitService.getTraits();
  }

  selectChip(traitId:number){

    let isSelected:boolean = false;
    let index:number = 0;

    for(let i = 0; i < this.selectedTraits.length; i++){
      if(this.selectedTraits[i].id == traitId){
        isSelected = true;
        index = i;
        break;
      }
    }

    // unselect chip
    if(isSelected){
      this.selectedTraits.splice(index,1);
    }else{
      this.selectedTraits.push(this.traits[traitId]);
    }



    this.selectionEvent.emit(this.selectedTraits);
  }
}
