import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { EffectsModule } from '@ngrx/effects';
import { TeacherEffects } from './store/teacher.effects';


@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    EffectsModule.forFeature([TeacherEffects])
  ]
})
export class TeachersModule { }
