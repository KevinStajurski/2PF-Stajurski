import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/auth/auth.actions';
import { authUser } from '../../store/auth/auth.selector';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit, OnDestroy {

  loginForm: FormGroup
  authUserSuscription?: Subscription

  constructor(private fb: FormBuilder, private loginService: LoginService, private store: Store, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.authUserSuscription = this.store.select(authUser).subscribe({
      next: (user) => {
        if (user) this.router.navigate(['dashboard'])
      }
    })
  }

  handleLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
    } else {
      this.store.dispatch(authActions.login({ payload: this.loginForm.getRawValue() }))
      //this.loginService.login(this.loginForm.getRawValue())
    }
  }

  ngOnDestroy(): void {
    this.authUserSuscription?.unsubscribe()
  }

}