import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FakultasprodiPage } from '../fakultasprodi/fakultasprodi';;
import { HymnemarsPage } from '../hymnemars/hymnemars';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-tabsakademik',
  templateUrl: 'tabsakademik.html',
})
export class TabsAkademikPage {

  tab4Root: any = FakultasprodiPage;
  tab5Root: any = AboutPage;
  tab6Root: any = HymnemarsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsAkademikPage');
  }

}
