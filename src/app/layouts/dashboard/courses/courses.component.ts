import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../core/services/courses.service';
import { ICourses } from '../../../core/models/courses';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  courses: ICourses[] = []

  obsSuscription?: Subscription

  ngOnInit(): void {
    this.obsSuscription = this.coursesService.obs.subscribe({
      next: (value) => this.courses = value
    })
  }
}