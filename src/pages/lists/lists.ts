import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AddListPage } from '../add-list/add-list';
import { ShoppingListModel } from '../../app/models/shoppinglist-model';
import { ProductModel } from '../../app/models/product-model';
import { CategoryModel } from '../../app/models/category-model';
import {ShopModel} from '../../app/models/shop-model'

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage {

  shop: ShopModel;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public params: NavParams) {
    
    this.shop = new ShopModel();

    //console.log(this.shop.lists[0]);

  }

  showList(name: string){
    let arg;
    for (let list of this.shop.lists){
      if(name == list.name)
        arg=list.name;
    }
    if(arg != null)
      this.navCtrl.push(ListPage, {
        list: arg,
        shop: this.shop
      });
    else
      this.navCtrl.push(ListPage);
  }

  showMenu(){
    const modal = this.modalCtrl.create(AddListPage, 0);
    modal.onDidDismiss(data => {
      if(data != null)
        this.addList(data);
    });
    modal.present();
  }

  addList(listName: string){

    this.shop.lists.push(new ShoppingListModel(listName));
  }
  
  findCategory(category_name: string, category_level: Array<CategoryModel>): CategoryModel{

    category_level.forEach((element) => {

      if(element.Name = category_name)
        return element;

    });

    return null;
  }

  findList(list_name: string, all_lists: Array<ShoppingListModel>): ShoppingListModel{

    all_lists.forEach((element) =>{

      if(element.name = list_name)
        return element;

    })

    return null;

  }

}
