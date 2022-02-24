import { Component } from '@angular/core';
import * as AOS from 'aos';

declare var cookieconsent: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit(){
    AOS.init();
    cookieconsent.initialise({
      palette: {
          popup: {
              background: '#3c404d',
              text: '#d6d6d6'
          },
          button: {
              background: '#66CC98'
          }
      },
      'cookie.domain': 'https://menucodi.com',
      theme: 'classic',
      content: {
          href: 'https://sites.google.com/view/digitalmenucookies'
      }
    });
    }
}
