import {ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {AgmCoreModule} from '@agm/core';
import {GraphComponent} from './graph.component';

const routes: Routes = [
    {
        path: '',
        component: GraphComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        AgmCoreModule,
        ReactiveFormsModule
    ],
    declarations: [GraphComponent],
    providers: [
    ]
})
export class GraphPageModule {
    private static IonicErrorHandler: any;
}
