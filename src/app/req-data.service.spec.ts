import { TestBed, inject } from '@angular/core/testing';

import { ReqDataService } from './req-data.service';

describe('ReqDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReqDataService]
    });
  });

  it('should be created', inject([ReqDataService], (service: ReqDataService) => {
    expect(service).toBeTruthy();
  }));
});
