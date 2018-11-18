import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

interface Item {
  name: string,
  show: boolean
}

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  items: Item[];
  snacks: Item[];
  cookies: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {name: "meat and fish", show: false},
      {name: "snacks and sweets", show: false},
      {name: "milk and cheese", show: false}
    ];
    this.snacks = [
      {name: "cookies", show: false}
    ]
    this.cookies = [
      {name: "chocolate", show: false},
      {name: "salty", show: false},
      {name: "butter", show: false}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListPage');
  }

  itemSelected(item: Item){
      item.show = !item.show;
  }

}
