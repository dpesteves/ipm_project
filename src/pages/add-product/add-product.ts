import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductModel } from '../../app/models/product-model';
import { CategoryModel } from '../../app/models/category-model';
import { ShopModel } from '../../app/models/shop-model';

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  shop: ShopModel;
  categories: Array<CategoryModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.shop = navParams.get('shop');
    this.categories = this.shop.getCategoriesByType(CategoryModel.ROOT);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListPage');
  }

  itemSelected(category: CategoryModel){
    category.show = !category.show;
  }

  addProduct(product: ProductModel){
    this.viewCtrl.dismiss(product);
  }
  
}
