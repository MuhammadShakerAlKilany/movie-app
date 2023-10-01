import { TestBed } from '@angular/core/testing';

import { PaginationSearchPageService } from './pagination-search-page.service';

describe('PaginationSearchPageService', () => {
  let service: PaginationSearchPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationSearchPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
