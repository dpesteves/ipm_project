import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ShoppingListModel} from '../../app/models/checklist-model';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  checkList : ShoppingListModel

  constructor(public navCtrl: NavController) {
    this.checkList = new ShoppingListModel("Contactos");
    this.checkList.addItem("Salada");
    this.checkList.addItem("Couves");
    this.checkList.addItem("Batatas");
    this.checkList.addItem("Cenouras");
    this.checkList.addItem("Tomates");
  }

  addItem(item){
    this.checkList.addItem(item);
  }

}
