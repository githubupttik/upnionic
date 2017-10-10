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
const browser = this.iab.create('http://elearning.upnjatim.ac.id/main/default_course_document/images/Logo_Upn_Jatim_Baru.png');
browser.close();
}  

}
