import {ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddexpensePage } from './addexpense.page';
import {AgmCoreModule} from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: AddexpensePage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        AgmCoreModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD2nDLzx7U7u_VhOjlcIDyOdZJsJSXFeXc',
            libraries: ['imagery', 'places']
        })],
  declarations: [AddexpensePage],
    providers: [
    ]
})
export class AddexpensePageModule {
    private static IonicErrorHandler: any;
}
