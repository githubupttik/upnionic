import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-fakultasprodi',
  templateUrl: 'fakultasprodi.html',
})
export class FakultasprodiPage {
information: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,private iab:InAppBrowser) {
  let localData = http.get('assets/fakultasprodi.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
  }

 toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
 
visitLink(url) {
const browser = this.iab.create("http:/"&&url, "_system", "location=true");
browser.close();
}  

}
