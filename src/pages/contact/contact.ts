import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ShoppingListModel} from '../../app/models/shoppinglist-model';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
 
  constructor(public navCtrl: NavController) {
  }
}
