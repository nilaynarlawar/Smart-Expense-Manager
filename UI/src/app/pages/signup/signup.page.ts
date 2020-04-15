import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ToastService} from '../../services/toast.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public postData = {
    firstName: '',
    lastName: '',
    userName: '',
    password: ''
  };
  constructor(
      private router: Router,
      private authService: AuthService,
      private toastService: ToastService,
      private navCtl: NavController
  ) { }

  ngOnInit() {
  }

  validateInputs() {
   return true;
  }
  signup() {
    if (this.validateInputs()) {
      this.postData.password = btoa(escape(this.postData.password));
      this.authService.signup(this.postData);
      this.toastService.presentToast('Account created successfully').then( (res) => {
          this.navCtl.navigateRoot('/login');
      });

    } else {
      this.toastService.presentToast('Please give some information about expense');
    }
  }

}
