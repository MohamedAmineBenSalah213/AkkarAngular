import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ApartmentsComponent } from './apartments/apartments.component';
import {IndexComponent } from './index/index.component';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';



const routes: Routes = [
  {path:"apartments", component:ApartmentsComponent},
  {path:"detailapartments",component:ApartmentDetailComponent},
  {path:"", redirectTo:"index", pathMatch:"full"},
  {path:"index", component:IndexComponent},
 // {path:"**", component:NotFoundComponent} //doit être toujours en dernière position
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
