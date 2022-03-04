import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  private annually = false;
  hidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  setAnnually(): void {
    var anuallyPriceBtn = document.getElementById('annuallyPriceBtn');
    var premiumPrice = document.getElementById('premiumPrice');
    var premiumPeriod = document.getElementById('premiumPeriod');
    var recommendedBadge = document.getElementById('recommendedBadge');

    if(this.annually) {
      this.annually = false;
      this.hidden = true;
      anuallyPriceBtn?.classList.remove('btn-success');
      anuallyPriceBtn?.classList.add('btn-outline-success');

      if(premiumPrice != null) {
        premiumPrice.innerText = '9.99';
      }
      
      if(premiumPeriod != null) {
        premiumPeriod.innerText = '/monthly';
      }

      if(recommendedBadge != null) {
        recommendedBadge.hidden = true;
      }
    }
    else {
      this.annually = true;
      this.hidden = false;
      anuallyPriceBtn?.classList.remove('btn-outline-success');
      anuallyPriceBtn?.classList.add('btn-success');

      if(premiumPrice != null) {
        premiumPrice.innerText = '100';
      }
      
      if(premiumPeriod != null) {
        premiumPeriod.innerText = '/anually';
      }

      if(recommendedBadge != null) {
        recommendedBadge.hidden = false;
      }
    }

  }

}
