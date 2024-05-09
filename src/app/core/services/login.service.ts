import { Injectable } from '@angular/core';
import { ILogin } from '../models/login';
import { BehaviorSubject, Observable } from 'rxjs';
import { IStudent } from '../models/student';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private MOCK_AUTH_USER:IStudent = {
    firstname: "Kevin",
    lastname: "Stajurski",
    id: 1,
    email: "kevin@gmail.com",
    coursed: [],
    studying: [],
    role: "user"
  }
  private _loginUser$ = new BehaviorSubject<IStudent | null>(null)
  public loginUser$ = this._loginUser$.asObservable()

  login(data: ILogin): void {
    if (data.email !== 'user@email.com' || data.password !== '123456') {
      alert("Correo o clave incorrecto.")
    } else {
      this._loginUser$.next(this.MOCK_AUTH_USER)
      localStorage.setItem('accessToken', 'jshadgjahg')
      this.router.navigate(['dashboard'])
    }
  }

  verifyToken(): boolean {
    const token = localStorage.getItem('accessToken')
    if (token) {
      this._loginUser$.next(this.MOCK_AUTH_USER)
      return true
    } else {
      return false
    }
  }

  logout(): void {
    this._loginUser$.next(null)
    localStorage.removeItem('accessToken')
  }

  constructor(private router:Router) { }
}
