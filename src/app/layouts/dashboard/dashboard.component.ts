import { Component } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { Store } from '@ngrx/store';
import { authState, authUser, authUserEmail } from '../../store/auth/auth.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  userName$: Observable<any> = this.store.select(authUserEmail)

  constructor(private loginService: LoginService, private store: Store) { }


  //showFiller = false;

  handleLogout() {
    this.loginService.logout()
  }

}