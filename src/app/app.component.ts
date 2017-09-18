import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { EmployeeService } from './employee-service';
import { EmployeeInterface, EmployeeInterfaceModel } from './employee-interface';
import { Departmentdetails } from './department-interface';
import { DeptDropDownService } from './dept-service';
import { FormGroup, FormControl, FormBuilder,ReactiveFormsModule,Validators,ValidatorFn} from '@angular/forms';

//declare const alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [EmployeeService]
})

export class AppComponent implements OnInit {
  /**Public variable */
  employeesArray: EmployeeInterface[] = [];
  deptType: Departmentdetails[] = [];
  employeeModel: EmployeeInterfaceModel;
  employeeDetail: EmployeeInterface;
/**Declaring myForm of Type FormGroup */
  myForm: FormGroup;

private validationsArray: Array<ValidatorFn> = [Validators.required,this.customUserNameValidationFn.bind(this)]
  /**explicitly declaring lastName */
  firstName= new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]);
  lastName = new FormControl('',this.validationsArray);
  employeeId =new FormControl(null,Validators.required);
  
  // Using constructor, call the cricketService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _empService: EmployeeService, private _deptDropDown: DeptDropDownService,private fb:FormBuilder) { }

  ngOnInit() {
    
    /**Define default values */
    /**Define default values */
    /**Using FormBuilder*/
    this.myForm = this.fb.group({
      'firstName': ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]*$')])],
      'lastName': ['',this.validationsArray],
      'employeeId': [null,Validators.required],
  
    });

    this.employeeModel = {
      firstName: '',
      lastName: '',
      employeeId:null,
      department:''
    };

    /**Using FormBuilder*/
    
    this.deptType = this._deptDropDown.getDeptType();
  }
/*Validating Function*/
customUserNameValidationFn(c: FormControl){
    const check = c.value;
    if(check && check.match('^[a-zA-Z]*$') || check.length>3 || check.length<3){
      return {
        check:true
        
      };
    
    }
    return null;

  }
  /**Add a cricket */
  addEmployee(values) {
    // values : {
    //   favShot: ""
    //   firstName: ""
    //   lastName: ""
    //   playerType: ""
    // }
    this.employeeDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      employeeId: values.employeeId,
      description: values.deptType
    };
    // /**Call function from service. */
    this._empService.addEmployee(this.employeeDetail);
    // Using 3rd party library to show message.
    //alertify.notify('Cricketer Added Successfully', 'success', 3);

    this.employeesArray = this._empService.getEmployee();
  };

   /**Reset a form */
 

}
