import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  loginForm: FormGroup

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['',Validators.required,Validators.email],
      password: ['',Validators.required]
    })
  }

  handleLogin() {
    if (this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
    } else {
      this.router.navigate(['dashboard'])
    }
  }

}