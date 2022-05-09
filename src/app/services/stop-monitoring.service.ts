import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StopMonitoringService {
  url = 'https://bustime.mta.info/api/siri/stop-monitoring.json';
  apiKey = ''; // add API Key

  constructor(private http: HttpClient) { }

  /**
   * get realtime data from the MTA BusTime API
   * request information about the vehicles serving a particular stop
   *
   * @param monitoringRef stop ID of the stop to be monitored (ex. 308214 for the stop at 5th Avenue and Union St towards Bay Ridge)
   */
  searchData(monitoringRef: string): Observable<any> {
    return this.http.get(`${this.url}?key=${this.apiKey}&MonitoringRef=${monitoringRef}`);
  }
}
