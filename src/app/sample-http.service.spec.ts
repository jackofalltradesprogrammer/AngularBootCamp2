import { TestBed, inject } from '@angular/core/testing';

import { SampleHttpService } from './sample-http.service';

describe('SampleHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleHttpService]
    });
  });

  it('should be created', inject([SampleHttpService], (service: SampleHttpService) => {
    expect(service).toBeTruthy();
  }));
});
