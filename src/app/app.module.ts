import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {LoginPage} from '../pages/login/login'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { BudgetPage } from '../pages/budget/budget';
import{ AngularFireDatabaseModule} from 'angularfire2/database'
import{ AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth'
import { UserProvider } from '../providers/user/user';
import { IncomeAddPage } from '../pages/income-add/income-add';
import { ExpenseAddPage } from '../pages/expense-add/expense-add';
import { DatePipe } from '@angular/common';

var config = {
  apiKey: "AIzaSyBdjBfFHWnOjuzO5wYo29W-SoLgMjs-DAM",
  authDomain: "budgettracker-7b97f.firebaseapp.com",
  databaseURL: "https://budgettracker-7b97f.firebaseio.com",
  projectId: "budgettracker-7b97f",
  storageBucket: "budgettracker-7b97f.appspot.com",
  messagingSenderId: "741792716593"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage,
    TabsPage,
    DashboardPage,
    BudgetPage,
    ExpenseAddPage,
    IncomeAddPage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    LoginPage,
    TabsPage,
    DashboardPage,
    BudgetPage,
    ExpenseAddPage,
    IncomeAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,DatePipe
  ]
})
export class AppModule {}
