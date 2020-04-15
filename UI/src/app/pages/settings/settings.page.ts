import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {StorageService} from '../../services/storage.service';
import {AuthConstants} from '../../config/auth-constants';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public postData = {
    userId: 0,
    userExpenselimit: 0.0,
    password: '',
    oldPassword: ''
};
  showPassword = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private toastService: ToastService,
              private storageService: StorageService,
              private navCtl: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUserId();
  }

  showPopup() {
    this.showPassword = true;
  }

  validateInputs() {
    const newpassword = this.postData.password.trim();
    const oldpassword = this.postData.oldPassword.trim();
    const limit = this.postData.userExpenselimit.toString().trim();
    return (this.postData.password && this.postData.oldPassword && this.postData.userExpenselimit
        && newpassword.length > 0 && oldpassword.length > 0 && limit.length > 0);

  }

  addLimit() {
    this.authService.addExpenseLimit(this.postData).subscribe((response) => {
      if (response) {
        this.toastService.presentToast('Your limit updated successfully');
        this.router.navigateByUrl('/home/settings');
        this.storageService.get(AuthConstants.USERDATA).then(res => {
          if (res) {
            const userData = JSON.parse(res);
            userData.expenselimit = this.postData.userExpenselimit;
            this.storageService.store(AuthConstants.USERDATA, userData).then(res1 => {
            });
          }
        });
      } else {
        this.toastService.presentToast('Limit update failed');
      }
    });
  }

  updatePassword() {
    if (this.validateInputs()) {
      this.postData.oldPassword = btoa(escape(this.postData.oldPassword));
      this.postData.password = btoa(escape(this.postData.password));
      this.authService.updatePassword(this.postData).subscribe((response) => {
        if (response) {
          this.toastService.presentToast('Password Changed successfully. Please login with new password');
          this.showPassword = false;
          this.authService.logout();
        } else {
          this.toastService.presentToast('Please confirm password, looks like something went wrong!');
        }
      });
    } else {
      this.toastService.presentToast('Please provide valid inputs.');
    }
  }

  getUserId() {
    this.storageService.get(AuthConstants.USERDATA).then(res => {
      if (res) {
        const userData = JSON.parse(res);
        this.postData.userId = parseInt(userData.userId, 10);
        this.postData.userExpenselimit = parseFloat(userData.expenselimit);
      }
    });
  }

  hidePopup() {
    this.showPassword = false;
  }
}
