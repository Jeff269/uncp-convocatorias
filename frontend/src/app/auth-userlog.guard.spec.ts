import { TestBed } from '@angular/core/testing';

import { AuthUserlogGuard } from './auth-userlog.guard';

describe('AuthUserlogGuard', () => {
  let guard: AuthUserlogGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthUserlogGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
