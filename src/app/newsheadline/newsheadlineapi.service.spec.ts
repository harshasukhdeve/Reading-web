import { TestBed } from '@angular/core/testing';

import { NewsheadlineapiService } from './newsheadlineapi.service';

describe('NewsheadlineapiService', () => {
  let service: NewsheadlineapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsheadlineapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

