import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { AddProductPage } from '../add-product/add-product';
import { ProductModel } from '../../app/models/product-model';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  products: ProductModel[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams/*, list: ShoppingListModel*/) {
    this.products = this.navParams.data;
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

  removeItem(product_name){

    debugger;
    var index = 0;

    for(let product of this.products){

      if(product.Name == product_name){
        this.products.splice(index, 1);
        break;
      }else
        index++;
    }

  }
  
}
