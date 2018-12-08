import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public params: NavParams, public alertCtrl: AlertController) {
    this.shop = this.params.get('shop');
    this.discounts = this.shop.discounts;
    this.list = "";
  }

  addToList(product: ProductModel){
    if(this.list != null && this.list != ""){
      this.shop.getList(this.list).addItem(product);
      this.presentSuccessAlert(product.Name);
      this.list = "";
    }
    else
      this.presentErrorAlert();
  }

  mySelectHandler(event){
    this.list = event.name;
  }

  presentErrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Empty field',
      subTitle: 'You have to choose a list to insert the product in',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentSuccessAlert(name: string) {
    let alert = this.alertCtrl.create({
      title: 'Product added',
      subTitle: 'Product ' + name + ' was added to list ' + this.list,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
