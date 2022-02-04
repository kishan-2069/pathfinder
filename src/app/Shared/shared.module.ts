import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
    ],
    entryComponents: [],
    providers: []
})
export class SharedModule { }
