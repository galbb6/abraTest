import { Component } from '@angular/core';
import { petsService } from '../pets.service';
@Component({
  selector: 'app-add-pet-form',
  templateUrl: './add-pet-form.component.html',
  styleUrls: ['./add-pet-form.component.css']
})

export class AddPetFormComponent {
  public newPet: any;
  selectedValue:any;
  selectedValue2: any;

  constructor(private petsList: petsService) {}
  handleNewPet() {
    let nameInput=document.getElementById("name") as HTMLInputElement;
    let ageInput=document.getElementById("age") as HTMLInputElement;
    let typeInput=document.getElementById("type") as HTMLInputElement;

    let name=nameInput.value;
    let age=ageInput.value;
    let type=this.selectedValue;
    let color=this.selectedValue2;
    this.newPet={
      name:name,
      age:age,
      type:type,
      color:color
    }

    this.petsList.petsList.push(this.newPet)
    console.log(this.petsList);
    nameInput.value="";
    ageInput.value="";
    typeInput.value=" ";




    }  
    
      onChange() {
        const radioButtons = document.getElementsByName('options');
        for (let i = 0; i < radioButtons.length; i++) {
          if ((<HTMLInputElement>radioButtons[i]).checked) {
            this.selectedValue2 = (<HTMLInputElement>radioButtons[i]).value;
            console.log( this.selectedValue)
            break;
          }
        }
    }
    onSelect(e:any){
       this.selectedValue = e.target.value;
    }
    
    
  }

