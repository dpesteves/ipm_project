import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductModel } from '../../app/models/product-model';
import { CategoryModel } from '../../app/models/category-model';

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

  categories = new Array<CategoryModel>();
  products = new Array<ProductModel>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.categories.push(new CategoryModel("Meat and fish", "node"));
    this.categories.push(new CategoryModel("Snacks and sweets", "node"));
    this.categories.push(new CategoryModel("Milk and cheese", "node"));

    this.categories[1].addChild("cookies");

   // this.categories[1].addProduct(title, category, price, supermarket, icon);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListPage');
  }

  itemSelected(item: Item){
      item.show = !item.show;
  }

}
