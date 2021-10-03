import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);

  }

  scroll = (): void => {

    let scrollHeigth = 50;
 
    if (window.scrollY >= scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', "#66CC98");
      document.body.style.setProperty('--navbar-scroll-text', "black");
      document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
      document.body.style.setProperty('--navbar-responsive-shadow', "none");    
    } else if (window.scrollY < scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', "transparent");
      document.body.style.setProperty('--navbar-scroll-text', "white");
      document.body.style.setProperty('--navbar-scroll-shadow', "none");
      document.body.style.setProperty('--navbar-responsive-shadow', "0 5px 15px rgba(0, 0, 0, 0.3)");
    }
  }
}
