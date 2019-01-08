import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { BudgetPage } from '../budget/budget';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  dashboardRoot = DashboardPage;
  budgetRoot = BudgetPage;
  myIndex:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.myIndex = navParams.data.tabIndex||0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
