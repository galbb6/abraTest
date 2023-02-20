import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPetFormComponent } from './add-pet-form/add-pet-form.component';
import { ShowPetScreenComponent } from './show-pet-screen/show-pet-screen.component';
import { PetCardsComponent } from './pet-cards/pet-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddPetFormComponent,
    ShowPetScreenComponent,
    PetCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
