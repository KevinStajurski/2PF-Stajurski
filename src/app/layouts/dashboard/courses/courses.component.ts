import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../../core/services/courses.service';
import { Subscription } from 'rxjs';
import { ICourse } from '../../../core/models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit, OnDestroy {

  constructor(private coursesService: CoursesService) { }

  courses: ICourse[] = []

  obsSuscription?: Subscription

  ngOnInit(): void {
    this.obsSuscription = this.coursesService.getCourses().subscribe({
      next: (courses) => this.courses = courses
    })
  }

  ngOnDestroy(): void {
    this.obsSuscription?.unsubscribe()
  }
}