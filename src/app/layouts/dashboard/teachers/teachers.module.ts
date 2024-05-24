import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { EffectsModule } from '@ngrx/effects';
import { TeacherEffects } from './store/teacher.effects';
import { StoreModule } from '@ngrx/store';
import { teacherFeature } from './store/teacher.reducer';


@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    StoreModule.forFeature(teacherFeature),
    EffectsModule.forFeature([TeacherEffects])
  ]
})
export class TeachersModule { }
