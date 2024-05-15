import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
  });

  it('debe establecer un usuario al llamar login', () => {
    service.login({
      email: 'user@email.com',
      password: '123456'
    })
    service.loginUser$.subscribe({
      next: (loginUser) => {
        expect(loginUser).toBeTruthy()
      }
    })
  });
});
