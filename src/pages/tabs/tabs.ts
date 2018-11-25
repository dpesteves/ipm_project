import { Component } from '@angular/core';

import { StatisticsPage } from '../statistics/statistics';
import { DiscountsPage } from '../discounts/discounts';
import { ListsPage } from '../lists/lists';
import { ShopModel } from '../../app/models/shop-model';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListsPage;
  tab2Root = StatisticsPage;
  tab3Root = DiscountsPage;
  myShop: ShopModel;

  constructor() {
    this.myShop = new ShopModel();
  }
}
