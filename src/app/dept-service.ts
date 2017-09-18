import { Injectable } from '@angular/core';
import { Departmentdetails } from './department-interface';

@Injectable()
export class DeptDropDownService {

  deptType: Departmentdetails[] = [];

  /** Get the player Type */
  getDeptType() {
    return this.deptType = [{
      type: 'Internal',
      name: 'Finance'
    },
    {
      type:'Internal',
      name: 'Admin'
    }, {
     type:'External',
      name: 'HR'
    }
    ];
  }

}
