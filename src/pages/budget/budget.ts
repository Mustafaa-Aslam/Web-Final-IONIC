import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the BudgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {
  date:any;
  month:any;
  budget:Array<any>=[];
  monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  public itemRef: firebase.database.Reference = firebase.database().ref('/budget');
  budgetForm:FormGroup;
  constructor(public navCtrl: NavController, public fb:FormBuilder, public navParams: NavParams, public toastCtrl:ToastController) {
    this.budgetForm=this.fb.group({
      food: ['' ],
      bills: [''],
      grocery: [''],
      entertainment: [''],
      misc: ['']
    });
    this.date= new Date().getMonth();
    this.month = this.monthNames[this.date];
    this.itemRef.on('value', itemSnapshot => {
      this.budget = [];
      itemSnapshot.forEach(itemSnap => {
        this.budget.push(itemSnap.val())
        return false;
      });
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetPage');
  }

  insertBudget(value){
    var state = firebase.database().ref('/budget/').set({
      food: value.food,
      bills: value.bills,
      grocery: value.grocery,
      entertainment: value.entertainment,
      misc: value.misc,
      month: this.month
    });
    if(state){
      this.showToast();
    //this.navCtrl.setRoot(TabsPage);
  }
}

showToast(){
  const Toast = this.toastCtrl.create({
    message:"Budget set succesfully",
    duration:3000
  });
}
  }

