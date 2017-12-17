import { TestBed, inject } from '@angular/core/testing';

import { ValidateService } from './validate.service';

describe('ValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateService]
    });
  });

  it('should be created', inject([ValidateService], (service: ValidateService) => {
    expect(service).toBeTruthy();
  }));
});
