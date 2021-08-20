import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  loginId = '';
  constructor() { }

  setLoginId(loginId: string): void {
    this.loginId = loginId;
  }
  getLoginId(): string {
    return this.loginId;
  }
}
