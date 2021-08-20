import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { LoginServiceService } from './services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private loginService: LoginServiceService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.loginService.getLoginId().length;
    if (isLoggedIn) {
      return true;
    }
    return false;
  }
}
