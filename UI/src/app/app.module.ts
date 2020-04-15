import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {Camera} from '@ionic-native/camera/ngx';
import {PapaParseModule} from 'ngx-papaparse';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule, HttpClientModule, PapaParseModule, AgmCoreModule.forRoot( {
      apiKey: 'AIzaSyD2nDLzx7U7u_VhOjlcIDyOdZJsJSXFeXc',
      libraries: ['imagery', 'places']
})],
  providers: [
    StatusBar,
    SplashScreen,
      HttpClientModule,
      Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


