import { Component } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { Store } from '@ngrx/store';
import { authUserEmail } from '../../store/auth/auth.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  userName$: Observable<any> = this.store.select(authUserEmail)

  constructor(private loginService: LoginService, private store: Store) { }

  handleLogout() {
    this.loginService.logout()
  }

}