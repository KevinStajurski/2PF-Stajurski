import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  loginForm: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    })
  }

  handleLogin() {
    if (this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
    } else {
      this.loginService.login(this.loginForm.getRawValue())
      this.router.navigate(['dashboard'])
    }
  }

}