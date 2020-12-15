import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { SpacexDataApiService } from './spacex-data-api.service';
import mockData from '../assets/mock-data.json';
import { mockProcessedData } from '../assets/mock-processed-data';

describe('SpacexDataApiService', () => {
  let service: SpacexDataApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpacexDataApiService],
    });

    service = TestBed.inject(SpacexDataApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should successfully fetch external data', () => {
    const numLaunches = mockData.length;

    service.getLastLaunches(numLaunches).subscribe((launches) => {
      expect(launches.length).toBe(numLaunches);
      expect(launches).toEqual(mockProcessedData);
    });

    const request = httpMock.expectOne(`${service.launchesUrl}${numLaunches}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockData);
    httpMock.verify();
  });
});
