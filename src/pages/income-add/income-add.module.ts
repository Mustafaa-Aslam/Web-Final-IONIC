import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncomeAddPage } from './income-add';

@NgModule({
  declarations: [
    IncomeAddPage,
  ],
  imports: [
    IonicPageModule.forChild(IncomeAddPage),
  ],
})
export class IncomeAddPageModule {}
