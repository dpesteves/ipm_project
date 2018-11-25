import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShopModel } from '../../app/models/shop-model';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ProductModel } from '../../app/models/product-model';

@Component({
  selector: 'page-discounts',
  templateUrl: 'discounts.html'
})
export class DiscountsPage {

  shop: ShopModel;
  discounts: Array<ProductModel>;
  show: boolean;
  list: string;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.shop = this.params.get('shop');
    this.discounts = this.shop.discounts;
  }

  addToList(product: ProductModel){
    this.shop.getList(this.list).addItem(product);
  }
}
