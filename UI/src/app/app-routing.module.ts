import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  { path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'viewexpense', loadChildren: './pages/viewexpense/viewexpense.module#ViewexpensePageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [
    Geolocation,
    NativeGeocoder
  ]
})
export class AppRoutingModule {}
