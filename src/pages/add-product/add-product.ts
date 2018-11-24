import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { ProductModel } from '../../app/models/product-model';
import { CategoryModel } from '../../app/models/category-model';
import { ShopModel } from '../../app/models/shop-model';

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

<<<<<<< HEAD
  categories = new Array<CategoryModel>();
  products = new Array<ProductModel>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.categories.push(new CategoryModel("Meat and fish", "node"));
    this.categories.push(new CategoryModel("Snacks and sweets", "node"));
    this.categories.push(new CategoryModel("Milk and cheese", "node"));

    this.categories[1].addChild("cookies");

   // this.categories[1].addProduct(title, category, price, supermarket, icon);
=======
  shop: ShopModel;
  categories: Array<CategoryModel>;
>>>>>>> 79f9a5eb4f6ef4d467a59dd648c1d351b0b73b58

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

  createProducts(){

  }

}
