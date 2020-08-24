import { TestBed } from '@angular/core/testing';

import { CostsStorageService } from './costs-storage.service';

describe('CostsStorageService', () => {
  let service: CostsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
