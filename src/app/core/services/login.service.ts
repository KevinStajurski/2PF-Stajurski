import { Injectable } from '@angular/core';
import { ILogin } from '../models/login';
import { BehaviorSubject } from 'rxjs';
import { IStudent } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _loginUser$ = new BehaviorSubject<IStudent | null>(null)
  public loginUser$ = this._loginUser$.asObservable()

  login(data: ILogin): void {
    if (data.email !== 'user@email.com' || data.password !== '123456') {
      alert("Correo o clave incorrecto.")
    } else {
      this._loginUser$.next({
        firstname: "Kevin",
        lastname: "Stajurski",
        id: 1,
        email: "kevin@gmail.com",
        coursed:[],
        studying:[],
        role: "user"
      })
    }
  }

  constructor() { }
}
