import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  options: AnimationOptions = {
    path: '../../../assets/animations/qr.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    width: '400px',
    height: '400px',
    margin: '0 auto',
  };

  
  constructor() { }

  ngOnInit(): void {
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
