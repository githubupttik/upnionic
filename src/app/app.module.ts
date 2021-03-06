import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { BelanegaraPage } from '../pages/belanegara/belanegara';
import { HymnemarsPage } from '../pages/hymnemars/hymnemars';
import { UptbiroPage } from '../pages/uptbiro/uptbiro';
import { KalenderakademikPage } from '../pages/kalenderakademik/kalenderakademik';
import { FakultasprodiPage } from '../pages/fakultasprodi/fakultasprodi';
import { SarprasPage } from '../pages/sarpras/sarpras';
import { ContactPage } from '../pages/contact/contact';
import { TabsAboutPage } from '../pages/tabsabout/tabsabout';
import { TabsAkademikPage } from '../pages/tabsakademik/tabsakademik';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ParallaxHeader } from '../directives/parallax-header/parallax-header';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    TabsAboutPage,
    TabsAkademikPage,
    BelanegaraPage,
    HymnemarsPage,
    FakultasprodiPage,
    KalenderakademikPage,
    UptbiroPage,  
    SarprasPage,  
    ContactPage,
    ParallaxHeader  
    ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    BelanegaraPage,
    HymnemarsPage,
    FakultasprodiPage,
    KalenderakademikPage,
    UptbiroPage,
    SarprasPage,
    ContactPage,
    TabsAboutPage,
    TabsAkademikPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
