import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TraitService } from '../trait/trait.service';
import { Trait } from '../trait/trait';
import { MatChip } from '@angular/material/chips';

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





  toggleSelection(chip: MatChip, trait: Trait) {
    chip.toggleSelected();
    chip.color = 'primary';
    if(chip.selected == true){
      this.selectedTraits.push(trait);
    }else{
      this.selectedTraits.splice(this.selectedTraits.indexOf(trait),1);
    }

    this.selectionEvent.emit(this.selectedTraits);
 }
  
}
