import { Component } from '@angular/core';
import { LoadingController,NavController,Platform, NavParams } from 'ionic-angular';
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
public aseks : any = [];

slideData = [{ image: "http://www.upnjatim.ac.id/images/upnjatim/ionic/slider/1.jpg" },{ image: "http://www.upnjatim.ac.id/images/upnjatim/ionic/slider/2.jpg" },{ image: "http://www.upnjatim.ac.id/images/upnjatim/ionic/slider/3.jpg" },{ image: "http://www.upnjatim.ac.id/images/upnjatim/ionic/slider/4.jpg" }]
slideLength: boolean = false;


 constructor(public loading: LoadingController,public navCtrl: NavController,public platform: Platform,private iab: InAppBrowser,public http   : Http,private sharingVar: SocialSharing) {
 
  this.platform = platform;
 
if(this.slideData.length>0) {
      this.slideLength = true;
}


  }

ionViewWillEnter()
   {
      this.load();
         
     }

load2()
{
        this.http.get('http://upttik.upnjatim.ac.id/asset/ionic/slider.php')
      .map(res => res.json())
      .subscribe(data2 =>
      {
         this.aseks = data2;
      });
}

load()
   {
      let loader = this.loading.create({
    content: 'Mengambil Data...',
  });

  loader.present().then(() => {
    this.load2(); 
this.http.get('http://upttik.upnjatim.ac.id/asset/ionic/retrieve-data.php')
      .map(res => res.json())
      .subscribe(data1 =>
      {
         this.items = data1;
          loader.dismiss();
      });
   
  });
   }

openSiamik() {
const browser = this.iab.create('https://siamik.upnjatim.ac.id/');

}    

openSimaba() {
const browser = this.iab.create('http://simaba.upnjatim.ac.id/');

}  
openElearning() {
const browser = this.iab.create('http://elearning.upnjatim.ac.id/');

}  
openEjournal() {
const browser = this.iab.create('http://ejournal.upnjatim.ac.id/');

}  

 doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.load();
      refresher.complete();
    }, 500);
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
        console.log('Sukses');
      },
      ()=>{
         console.log('Gagal');
      })
 
  }

}
