import { TestBed } from '@angular/core/testing';

import { VehicleMonitoringService } from './vehicle-monitoring.service';

describe('VehicleMonitoringService', () => {
  let service: VehicleMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
