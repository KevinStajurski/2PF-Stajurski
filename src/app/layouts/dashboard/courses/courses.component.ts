import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../core/services/courses.service';
import { Subscription } from 'rxjs';
import { ICourse } from '../../../core/models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  courses: ICourse[] = []

  obsSuscription?: Subscription

  ngOnInit(): void {
    
  }
}