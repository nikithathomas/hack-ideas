import { Injectable } from '@angular/core';
import employees from '../common/Employees';
import { Employee } from '../models/Employee';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor() {
    this.setEmployeeList(employees);
  }

  setLoginId(loginId: string): void {
    sessionStorage.setItem('loginId', loginId);
  }
  getLoginId(): string {
    const obtainedSessionLoginId = sessionStorage.getItem('loginId');
    if (obtainedSessionLoginId !== null) {
      return obtainedSessionLoginId;
    }
    return '';
  }
  setEmployeeList(employeeList: Array<Employee>): void {
    sessionStorage.setItem('employeesList', JSON.stringify(employeeList));
  }

  getEmployeeList(): Array<Employee> {
    const employeeList = sessionStorage.getItem('employeesList');
    if (employeeList !== null) {
      return JSON.parse(employeeList);
    }
    return [];
  }
  validateLogin(loginId: string): boolean {
    const obtainedList = this.getEmployeeList();
    const loggedInEmployee = obtainedList.find((employee) => {
      return employee.emailId === loginId;
    });
    if (loggedInEmployee) {
      return true;
    }
    return false;
  }
}
