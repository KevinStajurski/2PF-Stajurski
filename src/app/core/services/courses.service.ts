import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  addCourse(course: ICourse) {
    return this.httpClient.post('http://localhost:3000/courses', course)
  }

  deleteCourse(id: number) {
    return this.httpClient.delete(`http://localhost:3000/courses/${id}`)
  }

  editCourse(id: number, data: {}) {
    return this.httpClient.put(`http://localhost:3000/courses/${id}`, data)
  }

  getCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>('http://localhost:3000/courses')
  }

}