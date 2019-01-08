import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { MenuPage } from '../pages/menu/menu';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { BudgetPage } from '../pages/budget/budget';
import { DashboardPage } from '../pages/dashboard/dashboard';

export interface PageInterface {
  title:string;
  pageName:any;
  tabComponent?:any;
  index?:number;
  icon:string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: PageInterface[];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
        {title: 'Dashboard', pageName:TabsPage, tabComponent:DashboardPage , index:0, icon:'home'},
        {title: 'Budget', pageName:TabsPage, tabComponent:BudgetPage, index:1, icon:'home'}
      ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page:PageInterface) {
    let params={};
    if(page.index){
      params={tabIndex:page.index}
    }

    if(this.nav.getActiveChildNavs()[0] && page.index!=undefined){
      this.nav.getActiveChildNavs()[0].select(page.index)
    }
    //this.nav.setRoot(page.component);
  }
}
