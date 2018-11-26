import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppComponent } from './app.component';
 

import { IonicImageViewerModule } from 'ionic-img-viewer';

import { StatisticsPage } from '../pages/statistics/statistics';
import { DiscountsPage } from '../pages/discounts/discounts';
import { ListsPage } from '../pages/lists/lists';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { AddProductPage } from '../pages/add-product/add-product';
import { AddListPage } from '../pages/add-list/add-list';
import { ProductDetailPage } from '../pages/product-detail/product-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsPage,
    DiscountsPage,
    ListsPage,
    TabsPage,
    ListPage,
    AddListPage,
    AddProductPage,
    ProductDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(AppComponent),
    IonicImageViewerModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    StatisticsPage,
    DiscountsPage,
    ListsPage,
    TabsPage,
    ListPage,
    AddListPage,
    AddProductPage,
    ProductDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DecimalPipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
