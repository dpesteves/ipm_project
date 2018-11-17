import { Component } from '@angular/core';

import { StatisticsPage } from '../statistics/statistics';
import { ContactPage } from '../contact/contact';
import { ListsPage } from '../lists/lists';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListsPage;
  tab2Root = StatisticsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
