import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {StorageService} from '../../services/storage.service';
import {AuthConstants} from '../../config/auth-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {
    username: '',
    password: ''
};
  constructor(private router: Router,
              private authService: AuthService,
              private storageService: StorageService,
              private toastService: ToastService) { }

  ngOnInit() {
  }

  validateInputs() {
    const username = this.postData.username.trim();
    const password = this.postData.password.trim();
    return (this.postData.username && this.postData.password && username.length > 0 && password.length > 0);
  }

  loginAction() {
    if (this.validateInputs()) {
      this.postData.password = btoa(escape(this.postData.password));
      this.authService.login(this.postData).subscribe((res: any) => {
        if (res !== 0) {
          console.log(res);
          this.storageService.store(AuthConstants.AUTH, res).then(resp => {
            this.storageService.store(AuthConstants.USERID, res).then(res1 => {
              this.authService.getUser(res).subscribe((response: any) => {
                if (response) {
                  this.storageService.store(AuthConstants.USERDATA, JSON.stringify(response)).then(res3 => {
                    this.router.navigateByUrl('/home').then(r => {});
                  });
                }
              });
            });
          });
      } else {
          this.toastService.presentToast('Something went wrong, please verify data once.');
      }

      },
          (error: any) => {
            this.toastService.presentToast('Network connection Error');
          });
    } else {
      this.toastService.presentToast('Please provide the valid inputs.');
    }
  }
}
