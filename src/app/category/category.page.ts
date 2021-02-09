import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.pop();
  }

}
