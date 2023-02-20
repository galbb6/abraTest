import { Component, OnInit } from '@angular/core';
import { petsService } from '../pets.service';

@Component({
  selector: 'app-show-pet-screen',
  templateUrl: './show-pet-screen.component.html',
  styleUrls: ['./show-pet-screen.component.css']
})
export class ShowPetScreenComponent implements OnInit {
  public petsList:any;
  
  constructor(private petsService: petsService) { }

  ngOnInit(): void {
     this.petsList = this.petsService.petsList;
     console.log(this.petsList);
  }   
}
