import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITeacher } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private httpClient: HttpClient) { }

  addTeacher(teacher: ITeacher) {
    return this.httpClient.post('http://localhost:3000/teachers', teacher)
  }

  deleteTeacher(id: number) {
    return this.httpClient.delete(`http://localhost:3000/teachers/${id}`)
  }

  editTeacher(id: number, data: {}) {
    return this.httpClient.put(`http://localhost:3000/teachers/${id}`, data)
  }

  getTeachers(): Observable<ITeacher[]> {
    return this.httpClient.get<ITeacher[]>('http://localhost:3000/teachers')
  }
}
