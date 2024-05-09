import { Component } from '@angular/core';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private loginService: LoginService) { }
  //showFiller = false;
  handleLogout() {
    this.loginService.logout()
  }
}
