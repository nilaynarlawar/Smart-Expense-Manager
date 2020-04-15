import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import {HomeRouter} from './home.router';
import {AddexpensePageModule} from '../pages/addexpense/addexpense.module';
import {GraphPageModule} from '../pages/graph/graph.module';
import {ViewexpensePageModule} from '../pages/viewexpense/viewexpense.module';
import {SettingsPageModule} from '../pages/settings/settings.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddexpensePageModule,
    GraphPageModule,
    ViewexpensePageModule,
    SettingsPageModule,
    HomeRouter
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
