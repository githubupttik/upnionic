import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsAboutPage } from './tabsabout';

@NgModule({
  declarations: [
    TabsAboutPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsAboutPage),
  ],
})
export class TabsAboutPageModule {}
