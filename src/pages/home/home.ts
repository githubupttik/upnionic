import { Component } from '@angular/core';
import { NavController,Platform, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public items : any = [];
slideData = [{ image: "http://www.upnjatim.ac.id/images/upnjatim/berita/260917/111.jpg" },{ image: "http://www.upnjatim.ac.id/images/upnjatim/berita/290817/IMG_9599-700x385.jpg" },{ image: "http://www.upnjatim.ac.id/images/upnjatim/berita/210817/IMG_1172.JPG" }]
slideLength: boolean = false;


 constructor(public navCtrl: NavController,public platform: Platform,private iab: InAppBrowser,public http   : Http,private sharingVar: SocialSharing) {
 
  this.platform = platform;
 
if(this.slideData.length>0) {
      this.slideLength = true;
}


  }

ionViewWillEnter()
   {
      this.load();
   }

load()
   {
      this.http.get('http://17.17.17.13/upnionic/retrieve-data.php')
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
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

 doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.load();
      refresher.complete();
    }, 2000);
  }
  
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 2; i++) {
        this.load();
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  
  
  otherShare(v){
    this.sharingVar.share("UPN Veteran Jawa Timur",null/*Subject*/,null/*File*/,v+" - "+"http://www.upnjatim.ac.id")
    .then(()=>{
        alert("Sukses");
      },
      ()=>{
         alert("Gagal")
      })
 
  }

}
