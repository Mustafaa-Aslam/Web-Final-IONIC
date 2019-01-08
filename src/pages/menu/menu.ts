import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs'

import {BudgetPage} from '../budget/budget'
import {DashboardPage} from '../dashboard/dashboard'
import { Page } from 'ionic-angular/umd/navigation/nav-util';

export interface PageInterface {
  title:string;
  pageName:any;
  tabComponent?:any;
  index?:number;
  icon:string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage=TabsPage;
  //pages:PageInterface[];

  @ViewChild(Nav) nav:Nav;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page:PageInterface){

  }

  isActive(page:PageInterface){

  }

}
