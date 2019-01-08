
import { Injectable } from '@angular/core';
import *as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth'
import {AngularFireDatabase} from 'angularfire2/database'
import {AngularFireList} from 'angularfire2/database'

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  dbUser: AngularFireList<any>;
  constructor( public db:AngularFireDatabase, private afAuth:AngularFireAuth) {
    console.log('Hello UserProvider Provider');
  }


  getData() {
    this.dbUser = this.db.list('/users');
    return this.dbUser;
  }

  // async nativeGoogleLogin(): Promise<void> {
  //   try {
  
  //     const gplusUser = await this.gplus.login({
  //       'webClientId': 'your-webClientId-XYZ.apps.googleusercontent.com',
  //       'offline': true,
  //       'scopes': 'profile email'
  //     })
  
  //     return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
  
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }


  async googlelogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    var profile1 = provider.addScope('profile');
    var email1 = provider.addScope('email');
    var openid = provider.addScope('openid');
    var state = this.afAuth.auth.signInWithPopup(provider);
    console.log(state);
    if (state) {
      console.log("success");
      this.getData().push({
        id: firebase.auth().currentUser.uid,
        email: email1,
        profile: profile1,
        openid: openid
      });
      alert("SUCCESS");
    }
  }
}
