import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];

  constructor(private router: Router) {
    let emp = localStorage.getItem('employees');
    if (emp)
      this.employees = JSON.parse(emp);
  }
  ngOnInit(): void {
  }

  addEmployee() {
    this.router.navigate(['/add-employee']);
  }

}
