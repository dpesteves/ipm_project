import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage {

  constructor(public navCtrl: NavController) {

  }

  buttonEvent(){
    this.navCtrl.push(ListPage);
  }

}
