import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class logincomponent implements OnInit {
    submitted!: boolean;

    constructor(private employeeService: EmployeeService,
        private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
           if( this.submitted == true)
           {
            this.router.navigate(['/employees']); 
           }
           else
           {
            this.router.navigate(['/login']);
           }
  }

  

}