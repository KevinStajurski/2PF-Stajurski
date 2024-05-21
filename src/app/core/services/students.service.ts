import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

  addStudent(student: IUser) {
    return this.httpClient.post('http://localhost:3000/students', student)
  }

  deleteStudent(id: number) {
    return this.httpClient.delete(`http://localhost:3000/students/${id}`)
  }

  editStudent(id: number, data: {}) {
    return this.httpClient.put(`http://localhost:3000/students/${id}`, data)
  }

  getStudents(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('http://localhost:3000/students')
  }

}