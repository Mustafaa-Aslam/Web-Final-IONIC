import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { TabsPage } from '../tabs/tabs';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'

/**
 * Generated class for the IncomeAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income-add',
  templateUrl: 'income-add.html',
})
export class IncomeAddPage {

  date:any = new Date().toISOString().slice(0,10); 
 // datepipe:DatePipe;
 // latestdate:any;
  public incomeForm:FormGroup;
  constructor(public navCtrl: NavController, private fb:FormBuilder, public navParams: NavParams) {
    this.incomeForm = this.fb.group({
      category: ['', Validators.required],
      amount: ['']
    });
    //this.latestdate =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomeAddPage');
  }

  insertIncome(value){
    
     var state = firebase.database().ref('/users/' + "LVOJoUIXeBHiMRmhgji").child('/income').push({
        category: value.category,
        amount: value.amount,
        date: this.date.toString()
      });
      if(state){
      this.navCtrl.setRoot(TabsPage);
    }
  }
  

}
