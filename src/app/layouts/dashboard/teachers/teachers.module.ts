import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { EffectsModule } from '@ngrx/effects';
import { TeacherEffects } from './store/teacher.effects';
import { StoreModule } from '@ngrx/store';
import { teacherFeature } from './store/teacher.reducer';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    TeachersRoutingModule,
    StoreModule.forFeature(teacherFeature),
    EffectsModule.forFeature([TeacherEffects])
  ]
})
export class TeachersModule { }
