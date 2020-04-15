import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {StorageService} from './storage.service';
import {AuthConstants} from '../config/auth-constants';
import {NavController} from '@ionic/angular';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private httpService: HttpService,
                private storageService: StorageService,
                private router: Router,
                private navCtl: NavController) {
    }

    login(postData: any): Observable<any> {
        const queryParam = 'username=' + postData.username + '&password=' + postData.password;
        return this.httpService.get('login/isValidUser?', queryParam);
    }

    addExpense(postData: any) {
       return this.httpService.post('expense/createExpense', postData);

    }

    editExpense(postData: any) {
        return this.httpService.post('expense/editExpense', postData);
    }

    getExpenses(postData: any): Observable<any> {
        const queryParam = 'userId=' + postData.userId + '&filter=' + postData.filter;
        return this.httpService.getExpenseList('expense/getExpenseList?', queryParam);
    }

    getUser(userid: any): Observable<any> {
        const queryParam = 'userId=' + userid;
        return this.httpService.get('registration/getUser?', queryParam);
    }

    getExpense(expenseId: any): Observable<any> {
        const queryParam = 'expenseId=' + expenseId;
        return this.httpService.get('expense/getExpenseByExpenseId?', queryParam);
    }

    deleteExpense(expenseId: any): Observable<any> {
        const queryParam = 'expenseId=' + expenseId;
        return this.httpService.get('expense/deleteExpense?', queryParam);
    }

    signup(postData: any) {
        return this.httpService.post('registration/create', postData).subscribe();
    }

    logout() {
        this.storageService.removeStorageItem(AuthConstants.AUTH).then(res => {
            this.storageService.removeStorageItem(AuthConstants.USERID).then(res1 => {
                this.storageService.removeStorageItem(AuthConstants.USERDATA).then(res2 => {
                    this.navCtl.navigateRoot('/');
                });
            });
        });
    }

    getGraphData(userid: any): Observable<any> {
        const queryParam = 'userId=' + userid;
        return this.httpService.get('expense/getGraphData?', queryParam);
    }

    addExpenseLimit(postData: any) {
        return this.httpService.post('registration/updateExpenseLimit', postData);
    }

    updatePassword(postData: any) {
        return this.httpService.post('registration/updatePassword', postData);
    }
}
