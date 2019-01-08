import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import {TabsPage} from '../tabs/tabs'
import { FormGroup, FormBuilder , Validators } from '@angular/forms';

/**
 * Generated class for the ExpenseAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expense-add',
  templateUrl: 'expense-add.html',
})


export class ExpenseAddPage {
date:any = new Date().toISOString().slice(0,10);
  expenseForm:FormGroup;
  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams) {
    this.expenseForm = this.fb.group({
      category: ['', Validators.required],
      amount: ['']
    });
    this.date.toString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseAddPage');
  }

  insertExpense(value){
    var state = firebase.database().ref('/users/').child("LVOJoUIXeBHiMRmhgji").child('/expense').push({
       category: value.category,
       amount: value.amount,
       date: this.date
     });
     if(state){
     this.navCtrl.setRoot(TabsPage);
   }
 }

}
