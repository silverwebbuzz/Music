import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router,
    private statusBar: StatusBar) { }

  ngOnInit() {
      setTimeout(() => {
        this.router.navigate(['first']);
    }, 3000);
  }

}
