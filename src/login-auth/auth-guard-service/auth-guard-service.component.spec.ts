import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGuardServiceComponent } from './auth-guard-service.component';

describe('AuthGuardServiceComponent', () => {
  let component: AuthGuardServiceComponent;
  let fixture: ComponentFixture<AuthGuardServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthGuardServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthGuardServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
