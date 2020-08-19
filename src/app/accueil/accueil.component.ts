import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  title = 'digital-menu';
  stars = Array(5);
  productList = [
    {name: 'Gâteau au chocolat',description:"un vrai délice", price: 5},
    {name: 'Pancake au banane',description:"merveilleux" ,price: 7}
   ];
  cartProductList = [];
}
