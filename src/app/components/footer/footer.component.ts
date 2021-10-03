import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mybutton: any;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    this.mybutton = document.getElementById("myScrollBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop) {
      this.mybutton.style.display = "block";
    } else {
      this.mybutton.style.display = "none";
    }

  }
}
