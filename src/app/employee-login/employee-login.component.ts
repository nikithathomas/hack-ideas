import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.less']
})
export class EmployeeLoginComponent implements OnInit {
  employeeId = '';
  constructor() { }

  ngOnInit(): void {
  }

  loginEmployee(isFilled,isPatternMatching){
    if(isFilled && isPatternMatching){
      
    }
  }
}
