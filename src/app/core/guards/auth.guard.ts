import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loginService = inject(LoginService)
  const isAuth = loginService.verifyToken()
  return isAuth || router.createUrlTree(['auth'])
};