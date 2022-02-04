import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AddEmployeeComponent } from './add-employee.component';

const routes: Routes = [
    { path: '', component: AddEmployeeComponent }
];

@NgModule({
    declarations: [
        AddEmployeeComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class AddEmployeeModule { }
