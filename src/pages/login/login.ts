import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../menu/menu'
import { TabsPage } from '../tabs/tabs';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth'
import {UserProvider} from '../../providers/user/user'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth:AngularFireAuth, public User:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  

 

  doLogin(){
    
     //this.User.googlelogin();
     //if(this.User.googlelogin()){
    this.navCtrl.setRoot(TabsPage);
  // }
  // else{
  //   this.navCtrl.push(LoginPage);
  // }
  // }
}}
