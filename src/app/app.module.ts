
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

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LayoutComponent,
    DrinkComponent,
    FoodComponent,
    StarterComponent,
    ContactComponent
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
