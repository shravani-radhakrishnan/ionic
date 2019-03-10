import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';
import { BarPage } from './bar.page';

const routes: Routes = [
  {
    path: '',
    component: BarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    RouterModule.forChild([{ path: '', component:BarPage }])
  ],
  declarations: [BarPage]
})
export class BarPageModule {}
