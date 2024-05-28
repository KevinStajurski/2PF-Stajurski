import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IStudent, ITeacher } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  private MOCK_AUTH_USER: IStudent = {
    firstname: "User",
    lastname: "Test",
    id: 1,
    email: "user@email.com",
    finalized: [],
    inProgress: [],
    role: "user"
  }

  private MOCK_AUTH_ADMIN: ITeacher = {
    firstname: "Admin",
    lastname: "Test",
    email: "admin@email.com",
    subjectsCanTeach: [],
    role: "admin"
  }

  private _loginUser$ = new BehaviorSubject<IStudent | ITeacher | null>(null)

  public loginUser$ = this._loginUser$.asObservable()

  verifyToken(): boolean {
    const token = localStorage.getItem('accessToken')
    if (token == 'user') {
      this._loginUser$.next(this.MOCK_AUTH_USER)
      return true
    } else if (token == 'admin') {
      this._loginUser$.next(this.MOCK_AUTH_ADMIN)
      return true
    }
    else {
      return false
    }
  }

  logout(): void {
    this._loginUser$.next(null)
    localStorage.removeItem('accessToken')
    this.router.navigate(['auth'])
  }

}