import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {resolve } from 'dns';
import {CanActivate} from '@angular/router';
import {StorageService} from '../services/storage.service';
import {AuthConstants} from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(public storageService: StorageService, private router: Router) {}
    canActivate(): Promise<boolean> {
      return new Promise(resolveGuard => {
        this.storageService
            .get(AuthConstants.AUTH)
            .then(res => {
          if (res) {
            resolveGuard(true);
          } else {
            this.router.navigate(['/login']);
            resolveGuard(false);
          }
        }).catch(err => {
          resolveGuard(false);
        });
      });
    }
}
