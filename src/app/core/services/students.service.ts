import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

  addStudent(student: IStudent) {
    return this.httpClient.post('http://localhost:3000/students', student)
  }

  deleteStudent(id: number) {
    return this.httpClient.delete(`http://localhost:3000/students/${id}`)
  }

  editStudent(id: number, data: {}) {
    return this.httpClient.put(`http://localhost:3000/students/${id}`, data)
  }

  getStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>('http://localhost:3000/students')
  }

}