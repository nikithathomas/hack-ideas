import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginServiceService } from './services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private loginService: LoginServiceService, private route: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    return this.checkEmployeeLogin();
  }

  checkEmployeeLogin(): boolean | UrlTree {
    const isLoggedIn = this.loginService.getLoginId().length;
    if (isLoggedIn) {
      return true;
    }
    return this.route.parseUrl('/login');
  }
}
