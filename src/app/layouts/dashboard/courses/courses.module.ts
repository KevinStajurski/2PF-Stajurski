import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './store/course.effects';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    EffectsModule.forFeature([CourseEffects])
  ]
})
export class CoursesModule { }
