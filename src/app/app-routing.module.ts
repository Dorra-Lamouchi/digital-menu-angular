import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FoodComponent } from './food/food.component';
import { StarterComponent } from './starter/starter.component';
import { DrinkComponent } from './drink/drink.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  { path : "" , 
    component : LayoutComponent , 
    children : [
      { path : "" , 
    component : AccueilComponent} , 
      { path : "food" , 
      component : FoodComponent},
      { path : "food/starter" , 
      component : StarterComponent},
      { path : "drink" , 
      component : DrinkComponent},
      { path : "contact" , 
      component : ContactComponent}
    ]}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


