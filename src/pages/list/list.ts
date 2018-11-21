import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { AddProductPage } from '../add-product/add-product';
import { ProductModel } from '../../app/models/product-model';
import {ShopModel} from '../../app/models/shop-model';
import {ShoppingListModel} from '../../app/models/shoppinglist-model';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  list_name: string;
  shop: ShopModel;
  products: Array<ProductModel>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams/*, list: ShoppingListModel*/) {
    this.list_name = this.navParams.get('list');
    this.shop = this.navParams.get('shop');
    this.products = this.getListItems();
    

    debugger;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  showMenu(){
    const modal = this.modalCtrl.create(AddProductPage);
    modal.present();
  }

  getListItems(): Array<ProductModel>{

    debugger;

    var local_list = this.shop.getList(this.list_name);
    return local_list.getElements();
  }

  removeItem(product_name: string){

    this.shop.removeListProduct(this.list_name, product_name);

  }
  
}
