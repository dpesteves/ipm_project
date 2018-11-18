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


import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyD_zspAhREGFClaJdFx4cEnnMpBElOQtlE",
  authDomain: "ipmproject2018.firebaseapp.com",
  databaseURL: "https://ipmproject2018.firebaseio.com",
  projectId: "ipmproject2018",
  storageBucket: "ipmproject2018.appspot.com",
  messagingSenderId: "565734740623"
};


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
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
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
