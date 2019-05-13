
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {
  splash = true;


  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
    setTimeout(() => this.splash = false, 4000);
  }

   openLogin(){
    this.navCtrl.push('SigninPage');
    // this.navCtrl.setRoot(HomePage);

  }
  ionViewDidEnter(){
    this.menu.enable(false);
   }
   ionViewWillLeave(){
    this.menu.enable(true);
   }

}
