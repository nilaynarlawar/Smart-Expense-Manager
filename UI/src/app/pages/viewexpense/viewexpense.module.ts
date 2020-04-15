import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {PapaParseModule} from 'ngx-papaparse';
import { IonicModule } from '@ionic/angular';

import { ViewexpensePage } from './viewexpense.page';

const routes: Routes = [
  {
    path: '',
    component: ViewexpensePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      PapaParseModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewexpensePage]
})
export class ViewexpensePageModule {}
