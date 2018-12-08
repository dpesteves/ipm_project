import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { ProductModel } from '../../app/models/product-model';
import { CategoryModel } from '../../app/models/category-model';
import { ShopModel } from '../../app/models/shop-model';
import { ShoppingListModel } from '../../app/models/shoppinglist-model';

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  shop: ShopModel;
  categories: Array<CategoryModel>;
  list: ShoppingListModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {
    this.shop = navParams.get('shop');
    this.list = navParams.get('list');
    this.categories = this.shop.getCategoriesByType(CategoryModel.ROOT);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListPage');
  }

  itemSelected(category: CategoryModel){
    category.show = !category.show;
  }

  addProduct(product: ProductModel){
    if(!this.existsProductOnList(product.Name)){
      this.presentSuccessAlert(product.Name);
      this.list.addItem(product);
    }
    else {
      this.presentErrorAlert(product);
    }
  }
  
  presentErrorAlert(product: ProductModel) {
    let alert = this.alertCtrl.create({
      title: 'Product Already on List',
      subTitle: 'You already have this product on the list. Do you want to add another unit of this product to the list?',
      buttons: ['No', {
        text: 'Yes',
        handler: () => {
          this.list.addItem(product);
        }
      }]
    });
    alert.present();
  }

  presentSuccessAlert(name: string) {
    let alert = this.alertCtrl.create({
      title: 'Product added',
      subTitle: 'Product ' + name + ' was added to your list. If you want to further detail the product (such as its quantity) just click button "view" in the product that you want.',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  existsProductOnList(name: string) {
    debugger;
    for(let item of this.list.getElements())
      if(item.Name == name)
        return true;
    return false;
  }
}
