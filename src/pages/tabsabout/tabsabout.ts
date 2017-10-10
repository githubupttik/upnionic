import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BelanegaraPage } from '../belanegara/belanegara';
import { HymnemarsPage } from '../hymnemars/hymnemars';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-tabsabout',
  templateUrl: 'tabsabout.html',
})
export class TabsAboutPage {

  tab1Root: any = AboutPage;
  tab2Root: any = BelanegaraPage;
  tab3Root: any = HymnemarsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsAboutPage');
  }

}
