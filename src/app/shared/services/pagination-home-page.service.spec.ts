import { TestBed } from '@angular/core/testing';

import { PaginationHomePageService } from './pagination-home-page.service';

describe('PaginationHomePageService', () => {
  let service: PaginationHomePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationHomePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
