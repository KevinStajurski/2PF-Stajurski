import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './store/course.effects';
import { StoreModule } from '@ngrx/store';
import { courseFeature } from './store/course.reducer';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoursesRoutingModule,
    StoreModule.forFeature(courseFeature),
    EffectsModule.forFeature([CourseEffects])
  ]
})
export class CoursesModule { }
