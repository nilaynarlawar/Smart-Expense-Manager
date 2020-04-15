import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePage} from './home.page';
import {HomeGuard} from '../guards/home.guard';
import {GraphComponent} from '../pages/graph/graph.component';
import {AddexpensePage} from '../pages/addexpense/addexpense.page';
import {ViewexpensePage} from '../pages/viewexpense/viewexpense.page';
import {SettingsPage} from '../pages/settings/settings.page';

const routes: Routes = [
    {
        path: 'home',
        canActivate: [HomeGuard],
        component: HomePage,
        children: [
            {
                path: 'graph',
                canActivate: [HomeGuard],
                loadChildren: () => import('../pages/graph/graph.module').then(
                    m => m.GraphPageModule
                )
            },
            {
                path: 'addexpense',
                canActivate: [HomeGuard],
                loadChildren: () => import('../pages/addexpense/addexpense.module').then(
                    m => m.AddexpensePageModule
                )
            },
            {
                path: 'settings',
                canActivate: [HomeGuard],
                loadChildren: () => import('../pages/settings/settings.module').then(
                    m => m.SettingsPageModule
                )
            },
            {
                path: 'viewexpense',
                canActivate: [HomeGuard],
                loadChildren: () => import('../pages/viewexpense/viewexpense.module').then(
                    m => m.ViewexpensePageModule
                )
            }
        ]
    }];
@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }) export class HomeRouter {}
