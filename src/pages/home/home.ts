import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

slideData = [{ image: "http://www.upnjatim.ac.id/images/upnjatim/berita/260917/111.jpg" },{ image: "http://www.upnjatim.ac.id/images/upnjatim/berita/290817/IMG_9599-700x385.jpg" },{ image: "http://www.upnjatim.ac.id/images/upnjatim/berita/210817/IMG_1172.JPG" }]
slideLength: boolean = false;


 constructor(public navCtrl: NavController,public platform: Platform,private iab: InAppBrowser) {
 
  this.platform = platform;
 
if(this.slideData.length>0) {
      this.slideLength = true;
}

  }
  
openSiamik() {
const browser = this.iab.create('https://siamik.upnjatim.ac.id/');
browser.close();
}    

openSimaba() {
const browser = this.iab.create('http://simaba.upnjatim.ac.id/');
browser.close();
}  
openElearning() {
const browser = this.iab.create('http://elearning.upnjatim.ac.id/');
browser.close();
}  
openEjournal() {
const browser = this.iab.create('http://ejournal.upnjatim.ac.id/');
browser.close();
}  

}
