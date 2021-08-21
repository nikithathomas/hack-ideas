import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.less']
})
export class EmployeeLoginComponent implements OnInit {
  employeeId = '';
  constructor(private loginService: LoginServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  loginEmployee(isRequired: boolean, isPatternError: boolean): void {
    if (!isRequired && !isPatternError) {
      if (this.loginService.validateLogin(this.employeeId)) {
        this.loginService.setLoginId(this.employeeId);
        this.route.navigate(['/home']);
      }
    }
  }
}
