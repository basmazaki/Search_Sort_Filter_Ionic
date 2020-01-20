import { TestBed } from '@angular/core/testing';

import { ServiceShareService } from './service-share.service';

describe('ServiceShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceShareService = TestBed.get(ServiceShareService);
    expect(service).toBeTruthy();
  });
});
