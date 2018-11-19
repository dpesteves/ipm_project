import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ShoppingListModel} from '../../app/models/shoppinglist-model';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  checkList : ShoppingListModel

  constructor(public navCtrl: NavController) {

  }

  addItem(item){
    this.checkList.addItem(item);
  }

}
