import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-loading',
  templateUrl: './find-loading.page.html',
  styleUrls: ['./find-loading.page.scss'],
})
export class FindLoadingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
      setTimeout(() => {
        this.router.navigate(['tabs/home']);
    }, 3000);
  }

}
