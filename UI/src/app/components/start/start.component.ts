import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  constructor(private router: Router,
              private navCtl: NavController) { }

  ngOnInit() {}

  navigateToLoginPage() {
       this.navCtl.navigateRoot('login');
      // this.router.navigate(['login']);
  }

}
