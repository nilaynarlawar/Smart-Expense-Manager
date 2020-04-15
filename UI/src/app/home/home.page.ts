import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AuthService} from '../services/auth.service';
import {AuthConstants} from '../config/auth-constants';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username: string;
  constructor(public navCtrl: NavController,
              private authServ: AuthService,
              private storageService: StorageService,
              private router: Router) { }

  ionViewWillEnter() {
    this.getUserId();
  }

  ngOnInit() {
    this.getUserId();
  }
  logout() {
    this.authServ.logout();
  }

  getUserId() {
    this.storageService.get(AuthConstants.USERDATA).then(res => {
      if (res) {
        const userData = JSON.parse(res);
        this.username = userData.firstName + ' ' + userData.lastName;
      }
    });
  }

  toRoute() {
    this.router.navigateByUrl('/home/graph').then(res => {
      window.location.reload();
    });
  }
}
