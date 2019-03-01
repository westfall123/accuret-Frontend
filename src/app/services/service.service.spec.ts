import { TestBed } from '@angular/core/testing';

import { AccuretService } from './accuret.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccuretService = TestBed.get(AccuretService);
    expect(service).toBeTruthy();
  });
});
