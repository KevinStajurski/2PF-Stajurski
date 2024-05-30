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

  dataSource: ICourse[] = []

  obsSuscription?: Subscription

  displayedColumns: string[] = ['name', 'commission', 'duration', 'teacher', 'maxStudents', 'students', 'actions'];

  onDeleteCourse(){}

  openDialog(){}

  ngOnInit(): void {
    this.obsSuscription = this.coursesService.getCourses().subscribe({
      next: (courses) => this.dataSource = courses
    })
  }

  ngOnDestroy(): void {
    this.obsSuscription?.unsubscribe()
  }
}