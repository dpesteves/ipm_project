import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { AddProductPage } from '../add-product/add-product';
import { ProductModel } from '../../app/models/product-model';
import { ShoppingListModel } from '../../app/models/checklist-model';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  products: ProductModel[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, list: ShoppingListModel) {
    this.products = list.getElements();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  showMenu(){
    const modal = this.modalCtrl.create(AddProductPage);
    modal.present();
  }

}
