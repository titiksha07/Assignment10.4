import { Injectable } from '@angular/core';
import { EmployeeInterface } from './employee-interface';
import { Departmentdetails } from './department-interface';

@Injectable()
export class EmployeeService {

  employeeList: EmployeeInterface[] = [];

  /** Add employee in the array List. */
  addEmployee(employeeDetail: EmployeeInterface) {
    this.employeeList.unshift(employeeDetail);
  }

  /**Get the employee list from the array. */
  getEmployee(): EmployeeInterface[] {
    return this.employeeList;
  }


}
