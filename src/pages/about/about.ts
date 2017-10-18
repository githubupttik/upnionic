import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  
downloadLogo() {
const browser = this.iab.create('http://www.upnjatim.ac.id/images/upnjatim/ionic/logo.png');

}  

}
