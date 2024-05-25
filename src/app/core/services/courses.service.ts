import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourses } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: ICourses[] = []

  obs = new Observable<ICourses[]>((observer) => {
    observer.next(this.courses)
    observer.complete()
  })

}