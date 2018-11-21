import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppComponent } from './app.component';
 

import { IonicImageViewerModule } from 'ionic-img-viewer';

import { StatisticsPage } from '../pages/statistics/statistics';
import { ContactPage } from '../pages/contact/contact';
import { ListsPage } from '../pages/lists/lists';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { AddProductPage } from '../pages/add-product/add-product';
import { AddListPage } from '../pages/add-list/add-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    StatisticsPage,
    ContactPage,
    ListsPage,
    TabsPage,
    ListPage,
    AddListPage,
    AddProductPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(AppComponent),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    StatisticsPage,
    ContactPage,
    ListsPage,
    TabsPage,
    ListPage,
    AddListPage,
    AddProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //ShoppingListModel,
    //CategoryModel,
    //ProductModel,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
