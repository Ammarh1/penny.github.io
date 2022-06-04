import { TestBed } from '@angular/core/testing';

import { AuthService1 } from './auth.service';

describe('AuthService', () => {
  let service: AuthService1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
