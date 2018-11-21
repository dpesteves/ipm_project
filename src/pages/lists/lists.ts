import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AddListPage } from '../add-list/add-list';
import { ShoppingListModel } from '../../app/models/shoppinglist-model';
import { ProductModel } from '../../app/models/product-model';
import { CategoryModel } from '../../app/models/category-model';

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage {
  lists: ShoppingListModel[];
  counter:number;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public params: NavParams) {
    this.lists = new Array<ShoppingListModel>();

    this.lists = [new ShoppingListModel("familia"), new ShoppingListModel("jantar"), new ShoppingListModel("amigos")];
    console.log(this.lists[0]);
    
    this.counter = 3;

    this.lists[0].addItem(new ProductModel("oreo", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[0].addItem(new ProductModel("oreo", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[0].addItem(new ProductModel("oreo", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[1].addItem(new ProductModel("cuetara", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[1].addItem(new ProductModel("cuetara", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[1].addItem(new ProductModel("cuetara", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[2].addItem(new ProductModel("filipinos", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[2].addItem(new ProductModel("filipinos", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[2].addItem(new ProductModel("filipinos", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
  }

  showList(name: string){
    let arg;
    for (let list of this.lists){
      if(name == list.name)
        arg=list;
    }
    if(arg != null)
      this.navCtrl.push(ListPage, arg.getElements());
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
    this.lists[this.counter] = new ShoppingListModel(listName);
    this.counter++;
  }

}
