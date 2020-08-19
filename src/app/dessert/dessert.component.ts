import { Component, Input, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.scss']
})
export class DessertComponent{
  title = 'digital-menu';
  stars = Array(5);
  @Input() 
  products: any[];
  
}


