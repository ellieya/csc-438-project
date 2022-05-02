import { TestBed } from '@angular/core/testing';

import { RouteStopsService } from './route-stops.service';

describe('RouteStopsService', () => {
  let service: RouteStopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteStopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
