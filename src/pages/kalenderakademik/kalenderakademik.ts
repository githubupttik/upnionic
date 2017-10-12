import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-kalenderakademik',
  templateUrl: 'kalenderakademik.html',
})
export class KalenderakademikPage {

  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
  }

 downloadKalender() {
const browser = this.iab.create('http://www.upnjatim.ac.id/images/upnjatim/documents/KALENDER_AKADEMIK.pdf');
browser.close();
}  

}
