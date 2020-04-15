import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {NavController} from '@ionic/angular';
import {Papa} from 'ngx-papaparse';
import {AuthConstants} from '../../config/auth-constants';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-viewexpense',
  templateUrl: './viewexpense.page.html',
  styleUrls: ['./viewexpense.page.scss'],
})
export class ViewexpensePage implements OnInit {

  public expenses: any;
  userId = 0;

  postData = {
      filter : 'vegetable',
      userId : 0
  };
  constructor(private router: Router,
              private authService: AuthService,
              private toastService: ToastService,
              private papa: Papa,
              private storageService: StorageService,
              public navCtrl: NavController) { }

    ionViewWillEnter() {
      this.getUserId();
    }

  ngOnInit() {
   this.getUserId();
  }

    deleteExpense(expenseId: any) {
      this.authService.deleteExpense(expenseId).subscribe((response: any) => {
          if (response) {
              this.getExpenses();
          } else {
              alert('Expense deletion Error!!!');
          }
      });

    }

    editExpense(expenseId: any) {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                id: expenseId
            }
        };

        this.router.navigate(['/home/addexpense'], navigationExtras);

    }

    getExpenses() {
        this.authService.getExpenses(this.postData).subscribe((response: any) => {
                if (response) {
                    this.expenses = response.expenses;
                    console.log(this.expenses);
                } else {
                    this.toastService.presentToast('no Data');
                }
            },
            (error: any) => {
                this.toastService.presentToast('Network connection Error');
            });
    }

    downloadCSV() {
      const CSV = this.papa.unparse(this.expenses);
      const blob = new Blob([CSV]);
      const a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'expenses.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    getUserId() {
        this.storageService.get(AuthConstants.USERID).then(res => {
            if (res) {
                this.userId = parseInt(res, 10);
                this.postData.userId = this.userId;
                this.getExpenses();
            }
        });
    }
}
