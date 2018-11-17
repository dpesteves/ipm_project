import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppComponent } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ListsPage } from '../pages/lists/lists';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { AddListPage } from '../pages/add-list/add-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    AppComponent,
    AboutPage,
    ContactPage,
    ListsPage,
    TabsPage,
    ListPage,
    AddListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    AboutPage,
    ContactPage,
    ListsPage,
    TabsPage,
    ListPage,
    AddListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
