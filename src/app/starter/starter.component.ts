import { Component } from '@angular/core';


@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent{
  title = 'digital-menu';
  stars = Array(5);
}
