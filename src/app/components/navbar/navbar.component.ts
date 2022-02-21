import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler:ElementRef | undefined;
  
  constructor() { }

  public navbarCollapsed = '.navbar-collapse';

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

  hideScrollbar(): void {
    if(this.navbarCollapsed === '.navbar-collapse') {
      this.navbarCollapsed = '.navbar-collapse.show';
      console.log("aqwdasda");
    }
    else {
      this.navbarCollapsed = '.navbar-collapse';
    }
  }

  hideNavBar(): void {
    if(this.navbarToggler != undefined) {
      this.navbarToggler.nativeElement.click();
    }
  }
}
