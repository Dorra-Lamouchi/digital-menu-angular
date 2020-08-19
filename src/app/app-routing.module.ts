import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FoodComponent } from './food/food.component';
import { StarterComponent } from './starter/starter.component';
import { DrinkComponent } from './drink/drink.component';
import { ContactComponent } from './contact/contact.component';
import { SoupComponent } from './soup/soup.component';
import { SeaComponent } from './sea/sea.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PRComponent } from './p&r/p&r.component';
import { MPSComponent } from './m,p&s/m,p&s.component';
import { DessertComponent } from './dessert/dessert.component';
import { HotComponent } from './hot/hot.component';
import { ColdComponent } from './cold/cold.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  { path : "" , 
    component : LayoutComponent , 
    children : [
      { path : "" , 
    component : AccueilComponent} , 
      { path : "food" , 
      component : FoodComponent},
      { path : "starter" , 
      component : StarterComponent},
      { path : "soup" , 
      component : SoupComponent},
      { path : "seafood" , 
      component : SeaComponent},
      { path : "pizza" , 
      component : PizzaComponent},
      { path : "p&r" , 
      component : PRComponent},
      { path : "v&p" , 
      component : MPSComponent},
      { path : "dessert" , 
      component : DessertComponent},
      { path : "drink" , 
      component : DrinkComponent},
      { path : "drink/hot" , 
      component : HotComponent},
      { path : "drink/cold" , 
      component : ColdComponent},
      { path : "contact" , 
      component : ContactComponent},
      { path : "about" , 
      component : AboutComponent}
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


