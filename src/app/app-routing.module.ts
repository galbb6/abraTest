import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetFormComponent } from './add-pet-form/add-pet-form.component';
import { ShowPetScreenComponent } from './show-pet-screen/show-pet-screen.component';

const routes: Routes = [
  {path:'show', component:ShowPetScreenComponent},
  {path:'add', component:AddPetFormComponent},
  {path:' ', component:AddPetFormComponent},
  {path:'**', component:AddPetFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
