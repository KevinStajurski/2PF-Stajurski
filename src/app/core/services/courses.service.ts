import { Injectable } from '@angular/core';
import { ICourses } from '../models/courses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: ICourses[] = [
    { name: 'HTML-CSS', commission: 1, durationInWeeks: 4, startDate: new Date, endDate: new Date, teacher: 'Fede Castro', maxStudents: 30, students: [] },
    { name: 'Javascript', commission: 1, durationInWeeks: 6, startDate: new Date, endDate: new Date, teacher: 'Francisco Pugh', maxStudents: 30, students: [] },
    { name: 'React', commission: 1, durationInWeeks: 6, startDate: new Date, endDate: new Date, teacher: 'Jorge Zambrano', maxStudents: 30, students: [] },
    { name: 'Angular', commission: 1, durationInWeeks: 6, startDate: new Date, endDate: new Date, teacher: 'Josue Baez', maxStudents: 30, students: [] }
  ]

  obs = new Observable<ICourses[]>((observer) => {
    observer.next(this.courses)
    observer.complete()
  })

}