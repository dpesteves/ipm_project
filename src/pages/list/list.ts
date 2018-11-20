import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { AddProductPage } from '../add-product/add-product';
import { ProductModel } from '../../app/models/product-model';
import { ShoppingListModel } from '../../app/models/shoppinglist-model';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  products: ProductModel[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams/*, list: ShoppingListModel*/) {
    
    debugger;
    
    this.products = this.navParams.data;
    //this.products = list.getElements();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  showMenu(){
    const modal = this.modalCtrl.create(AddProductPage);
    modal.present();
  }

  loadList(list){
    this.products = list;
  }


}
