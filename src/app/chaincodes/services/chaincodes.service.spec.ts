import { TestBed } from '@angular/core/testing';

import { ChaincodesService } from './chaincodes.service';

describe('ChaincodesService', () => {
  let service: ChaincodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaincodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
