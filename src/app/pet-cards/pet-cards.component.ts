import { Component,Input } from '@angular/core';
import { petsService } from '../pets.service';

@Component({
  selector: 'app-pet-cards',
  templateUrl: './pet-cards.component.html',
  styleUrls: ['./pet-cards.component.css']
})
export class PetCardsComponent {
  @Input() pet:any;
  constructor(private petsList:petsService){}


}
