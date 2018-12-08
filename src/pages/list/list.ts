import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { AddProductPage } from '../add-product/add-product';
import { ProductModel } from '../../app/models/product-model';
import { ShopModel } from '../../app/models/shop-model';
import { ProductDetailPage } from '../../pages/product-detail/product-detail'

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  showMenu(){
    debugger;
    const modal = this.modalCtrl.create(AddProductPage, {
      shop: this.shop,
      list: this.shop.getList(this.list_name),
    });

    modal.present();

    modal.onDidDismiss(data => {
      for(let c of this.shop.category_roots)
        c.show = false;
      for(let c of this.shop.category_nodes)
        c.show = false;
      })

  }

  getListItems(): Array<ProductModel>{
    var local_list = this.shop.getList(this.list_name);
    return local_list.getElements();
  }

  removeItem(product_name: string){
    this.shop.getList(this.list_name).removeItem(product_name);
    this.shop.removeListProduct(this.list_name, product_name);
  }

  showProductDetail(name: string){
    let arg;
    for (let product of this.products){
      if(name == product.Name)
        arg=product;
    }
    if(arg != null)
      this.navCtrl.push(ProductDetailPage, {
        product: arg,
      });
    else
      this.navCtrl.push(ProductDetailPage);
  }

  existsProductOnList(name: string) {
    for(let item of this.products)
      if(item.Name == name)
        return true;
    return false;
  }
}
