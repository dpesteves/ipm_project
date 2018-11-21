import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-list',
  templateUrl: 'add-list.html',
})
export class AddListPage {
  
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListPage');
  }

  addList(){
    if(this.name != null && this.name != ""){
      this.presentSuccessAlert();
      this.viewCtrl.dismiss(this.name);
    }
    else{
      //popup sobre nao ter dados
      this.presentErrorAlert();
      console.log("Não tem nada")
    }
  }

  presentErrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Empty field',
      subTitle: 'You have to write a name for the list',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: 'List added',
<<<<<<< HEAD
      subTitle: 'List ' + this.name + ' was added to your Lists',
=======
      subTitle: 'List ' + this.name + ' added to your lists',
>>>>>>> d882ab03fa29014b10e056a5efb6726e70285404
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
