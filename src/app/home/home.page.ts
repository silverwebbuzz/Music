import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    slidesPerView : 1.7,
    spaceBetween : 10,
  };

  slideOptsRound = {
    slidesPerView : 'auto',
    spaceBetween : 10,
  };

  slideOptsSmall = {
    slidesPerView : 2.5,
    spaceBetween : 10,
  };

  constructor() {}

}
