import { TestBed } from '@angular/core/testing';

import { SpacexDataApiService } from './spacex-data-api.service';

describe('SpacexDataApiService', () => {
  let service: SpacexDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
