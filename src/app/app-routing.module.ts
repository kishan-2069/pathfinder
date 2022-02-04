import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Components/employees/employees.module').then(m => m.EmployeesModule),
  },
  {
    path: 'employees',
    loadChildren: () => import('./Components/employees/employees.module').then(m => m.EmployeesModule),
  },
  {
    path: 'add-employee',
    loadChildren: () => import('./Components/add-employee/add-employee.module').then(m => m.AddEmployeeModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
