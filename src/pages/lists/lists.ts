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
    /*var list1 = new ShoppingListModel();
    list1.setName("familia");
    var list2 = new ShoppingListModel();
    list2.setName("jantar");
    var list3 = new ShoppingListModel();
    list3.setName("amigos");*/
    
    this.lists = new Array<ShoppingListModel>();

    //this.lists[0] = list1; this.lists[1] = list2; this.lists[2] = list3;
    
    this.lists = [new ShoppingListModel("familia"), new ShoppingListModel("jantar"), new ShoppingListModel("amigos")];
    console.log(this.lists[0]);
    
    this.lists[0].addItem(new ProductModel("oreo", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[0].addItem(new ProductModel("filipinos", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));

    this.counter = 3;

    /*
    this.lists[0].addItem(new ProductModel("oreo", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[0].addItem(new ProductModel("oreo", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[0].addItem(new ProductModel("oreo", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[1].addItem(new ProductModel("cuetara", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[1].addItem(new ProductModel("cuetara", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[1].addItem(new ProductModel("cuetara", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[2].addItem(new ProductModel("filipinos", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[2].addItem(new ProductModel("filipinos", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    this.lists[2].addItem(new ProductModel("filipinos", new CategoryModel("bolacha"), 1, "pingo doce", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/154a0c46491117.58ccb7bb92924.png"));
    */
  }

  buttonEvent(name: string){
    debugger;
    let arg;
    switch(name){
      case "familia": { arg = this.lists[0]; break; }
      case "jantar": { arg = this.lists[1]; break; }
      case "amigos": { arg = this.lists[2]; break; }
      default: { break; }
    }
    //this.navCtrl.push(ListPage, arg);
    this.navCtrl.push(ListPage, arg.getElements());
  }

  showMenu(){
    const modal = this.modalCtrl.create(AddListPage, 0);
    modal.onDidDismiss(data => {
      this.addList(data);
    });
    modal.present();
  }

  addList(listName: string){
    this.lists[this.counter] = new ShoppingListModel(listName);
    this.counter++;
  }
}
