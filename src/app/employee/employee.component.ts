import { Component, OnInit, Input } from '@angular/core';
import { EmployeeInterface } from './../employee-interface'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
@Input() employeeDetail
employeesList:EmployeeComponent[];
  constructor() { }

  ngOnInit() {
  }

}
