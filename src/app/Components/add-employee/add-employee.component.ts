import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employees: any[] = [];

  registerForm: FormGroup = new FormGroup({
    title: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormControl(),
    dob: new FormControl(),
    role: new FormControl(),
    phone: new FormControl(),
    gender: new FormControl(),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', [Validators.required]],
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      role: ['', [Validators.required]],
      phone: ['', [Validators.required], Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
      gender: ['', [Validators.required]],
    });

    let emp = localStorage.getItem('employees');
    if (emp)
      this.employees = JSON.parse(emp);
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.employees.push(this.registerForm.value);
    localStorage.setItem('employees', JSON.stringify(this.employees));
    this.router.navigate(['/employees']);
    this.onReset();
    alert('SUCCESS!! :-)');
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
