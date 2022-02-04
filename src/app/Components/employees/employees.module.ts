import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/Shared/shared.module';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
    { path: '', component: EmployeesComponent }
];

@NgModule({
    declarations: [
        EmployeesComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class EmployeesModule { }
