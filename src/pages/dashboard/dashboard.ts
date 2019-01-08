import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Chart } from 'chart.js'
import { IncomeAddPage } from '../income-add/income-add';
import { ExpenseAddPage } from '../expense-add/expense-add';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  expenseList: any[];
  totalIncome = 0;
  totalExpense = 0;
  totalBills = 0;
  totalGrocery = 0;
  totalMisc = 0;
  totalEntertainment = 0;
  totalFood = 0;
  incomes: Array<any> = [];
  expenses: Array<any> = [];
  totalExpenses: Array<any> = [];
  expense: any = this.db.list('/users' + "LVOK_2HgQf1X4v-18So" + '/expense');
  chartVar: any;
  salary: any = 2000;
  freelance: any = 4000;
  public itemRef: firebase.database.Reference = firebase.database().ref('/expense');
  public incomeRef: firebase.database.Reference = firebase.database().ref('/income');
  @ViewChild('chartCanvas') chartCanvas;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireAuth, public db: AngularFireDatabase) {

    this.itemRef.limitToLast(3).on('value', itemSnapshot => {
      this.expenses = [];
      itemSnapshot.forEach(itemSnap => {
        this.expenses.push(itemSnap.val())
        return false;
      });
    });
   // this.forChart();
    this.itemRef.on('value', itemSnapshot => {
      this.totalExpenses = [];
      itemSnapshot.forEach(itemSnap => {
        this.totalExpenses.push(itemSnap.val())
        return false;
      });
      for (var key in this.totalExpenses) {
        var expense = parseInt((this.totalExpenses[key].amount));
      //  console.log(expense);
        this.totalExpense += expense;
      }
    });

    this.incomeRef.on('value', itemSnapshot => {
      this.incomes = [];
      itemSnapshot.forEach(itemSnap => {
        this.incomes.push(itemSnap.val())
        return false;
      });
      for (var key in this.incomes) {
        var expense = parseInt((this.incomes[key].amount));
       // console.log(expense);
        this.totalIncome += expense;
      }
    });

  }
  // this.expense.snapshotChanges().subscribe(item=>{
  //   this.expenseList = [];
  //   item.forEach(element=>{
  //     var y = element.payload.toJSON();
  //     y["$key"]=element.key;
  //     this.expenseList.push(y);
  //   })
  //   });
  //this.income = db.list('/income');
  //console.log(this.income);


  forChart() {

    this.itemRef.on('value', itemSnapshot => {
      this.totalExpenses = [];
      itemSnapshot.forEach(itemSnap => {
        this.totalExpenses.push(itemSnap.val())
        return false;
      });
      for (var key in this.totalExpenses) {
        if (this.totalExpenses[key].category==("bills")) {
          var expense = parseInt((this.totalExpenses[key].amount));
          //console.log(expense);
          this.totalBills += expense;
        } else if (this.totalExpenses[key].category==("misc")) {
          var expense = parseInt((this.totalExpenses[key].amount));
          //console.log(expense);
          this.totalMisc += expense;
        }
        else if (this.totalExpenses[key].category==("grocery")) {
          var expense = parseInt((this.totalExpenses[key].amount));
          //console.log(expense);
          this.totalGrocery += expense;
        } else if (this.totalExpenses[key].category==("food")) {
          var expense = parseInt((this.totalExpenses[key].amount));
          //console.log(expense);
          this.totalFood += expense;
        }
      }
      this.getChartVal(this.totalBills, this.totalGrocery, this.totalMisc)
    });


  }
  ionViewDidLoad() {
    this.forChart();
  }

  getChartVal(value:number, value2:number,value3:number){
    this.totalBills=value;
    this.totalGrocery=value2;
    this.totalMisc=value3;
  }
  // getData() {
  //   this.expense = this.db.list('/expense').snapshotChanges().subscribe(userSnapshot => {

  //     userSnapshot.forEach(userSnapshot => {

  //       this.expenseList = []
  //       let user = userSnapshot.payload.toJSON()
  //       user['$key'] = userSnapshot.key;
  //       this.expenseList.push(user);

  //     });
  //   });;

  // }
  // calculateSum(value){
  //   this.sumValue = this.sumValue + parseInt(value);
  // }


  showChart(value:number, value2:number,value3:number) {
    // console.log(this.totalGrocery);
    // console.log(this.totalBills);
    // console.log(this.totalMisc);
    this.chartVar = new Chart(this.chartCanvas.nativeElement, {
      type: 'pie',
      data: {
        datasets: [{
          data: [value, value2, value3],
          backgroundColor: [
            'rgba(41,244,122,1)',
            'rgba(255,41,0,1)',
            'rgba(150,230,150,1)',
          ]
        }],
        labels: [
          'bills',
          'misc',
          'grocery'
        ]
      },
      options: {
        tooltips: {
          enabled: true
        }
      }
    })
  }
  addIncome() {
    this.navCtrl.push(IncomeAddPage);
  }
  addExpense() {
    this.navCtrl.push(ExpenseAddPage);
  }


}
