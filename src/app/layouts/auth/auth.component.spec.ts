import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports:[SharedModule, BrowserAnimationsModule]
    })

    fixture = TestBed.createComponent(AuthComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('email required', () => {
    const control = component.loginForm.get('email')
    control?.setValue('')
    expect(control?.hasError('required')).toBeTrue();
  });

  it('password required', () => {
    const control = component.loginForm.get('password')
    control?.setValue('')
    expect(control?.hasError('required')).toBeTrue();
  });
});
