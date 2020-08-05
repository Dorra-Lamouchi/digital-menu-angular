import { HostListener,Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
  title = 'digital-menu';
  public scroll: boolean = false;
  constructor(){}
  ngOnInit(){}
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.scrollY
    console.log("number: ", number)
    if (number > 50) {
        {
            this.scroll = false
            console.log("scroll: ", this.scroll)
        }
    } else if (this.scroll == false && number < 10) {
        {
            this.scroll = true;
            console.log("scroll: ", this.scroll)
        }

    }

}
}
