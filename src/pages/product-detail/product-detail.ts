import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductModel} from '../../app/models/product-model'

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  product: ProductModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.product = navParams.get("product");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  OnInput(val){
    
    var quantity = Number(val);
    this.product.editQuantity(quantity);

  }

}
