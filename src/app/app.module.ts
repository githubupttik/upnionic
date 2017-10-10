import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { BelanegaraPage } from '../pages/belanegara/belanegara';
import { HymnemarsPage } from '../pages/hymnemars/hymnemars';
import { TabsAboutPage } from '../pages/tabsabout/tabsabout';
import { TabsAkademikPage } from '../pages/tabsakademik/tabsakademik';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ParallaxHeader } from '../directives/parallax-header/parallax-header';


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
    ParallaxHeader  
    ],
  imports: [
    BrowserModule,
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
    TabsAboutPage,
    TabsAkademikPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
