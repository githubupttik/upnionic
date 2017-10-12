import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FakultasprodiPage } from '../fakultasprodi/fakultasprodi';;
import { KalenderakademikPage } from '../kalenderakademik/kalenderakademik';
import { UptbiroPage } from '../uptbiro/uptbiro';

@IonicPage()
@Component({
  selector: 'page-tabsakademik',
  templateUrl: 'tabsakademik.html',
})
export class TabsAkademikPage {

  tab4Root: any = FakultasprodiPage;
  tab5Root: any = KalenderakademikPage;
  tab6Root: any = UptbiroPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsAkademikPage');
  }

}
