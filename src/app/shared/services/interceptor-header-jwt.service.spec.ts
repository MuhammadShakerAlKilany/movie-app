import { TestBed } from '@angular/core/testing';

import { InterceptorHeaderJWTService } from './interceptor-header-jwt.service';

describe('InterceptorHeaderJWTService', () => {
  let service: InterceptorHeaderJWTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorHeaderJWTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
