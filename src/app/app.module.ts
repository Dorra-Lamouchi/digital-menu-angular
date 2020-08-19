
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { DrinkComponent } from './drink/drink.component';
import { FoodComponent } from './food/food.component';
import { StarterComponent} from './starter/starter.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LayoutComponent,
    DrinkComponent,
    HotComponent,
    ColdComponent,
    FoodComponent,
    StarterComponent,
    SoupComponent,
    SeaComponent,
    PizzaComponent,
    PRComponent,
    MPSComponent,
    DessertComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
