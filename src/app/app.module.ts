import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
<<<<<<< HEAD
import { AppComponent } from './app.component';
 
import { IonicImageViewerModule } from 'ionic-img-viewer';
=======
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
>>>>>>> 85a1cf276c508b23d4beaf79420f342f1cd953e6

import { ProductModel } from './models/product-model';
import { CategoryModel, } from './models/category-model';
import { ShoppingListModel } from './models/shoppinglist-model';

import { AppComponent } from './app.component';
import { StatisticsPage } from '../pages/statistics/statistics';
import { ContactPage } from '../pages/contact/contact';
import { ListsPage } from '../pages/lists/lists';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { AddProductPage } from '../pages/add-product/add-product';
import { AddListPage } from '../pages/add-list/add-list';

<<<<<<< HEAD
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HttpModule } from '@angular/http';

=======
>>>>>>> 85a1cf276c508b23d4beaf79420f342f1cd953e6

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
<<<<<<< HEAD
    IonicModule.forRoot(AppComponent),
    IonicImageViewerModule
=======
    IonicModule.forRoot(AppComponent)
>>>>>>> 85a1cf276c508b23d4beaf79420f342f1cd953e6
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
