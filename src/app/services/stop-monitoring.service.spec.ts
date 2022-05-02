import { TestBed } from '@angular/core/testing';

import { StopMonitoringService } from './stop-monitoring.service';

describe('StopMonitoringService', () => {
  let service: StopMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StopMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
