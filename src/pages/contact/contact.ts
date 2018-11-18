import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChecklistModel} from '../../app/models/checklist-model';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  checkList : ChecklistModel

  constructor(public navCtrl: NavController) {
    this.checkList = new ChecklistModel("Contactos");
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
