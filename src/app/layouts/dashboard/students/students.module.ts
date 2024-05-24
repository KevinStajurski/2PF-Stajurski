import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { AddStudentDialogComponent } from './add-student-dialog/add-student-dialog.component';
import { SharedModule } from '../../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/student.effects';
import { StoreModule } from '@ngrx/store';
import { studentFeature } from './store/student.reducer';


@NgModule({
  declarations: [
    StudentsComponent,
    AddStudentDialogComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    StoreModule.forFeature(studentFeature),
    EffectsModule.forFeature([StudentEffects])
  ]
})
export class StudentsModule { }
