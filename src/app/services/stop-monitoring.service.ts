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
   * get data from the MTA BusTime API
   * request information about the vehicles serving a particular stop
   *
   * @param monitoringRef the GTFS stop ID of the stop to be monitored
   *  For example, 308214 for the stop at 5th Avenue and Union St towards Bay Ridge.
   */
  searchData(monitoringRef: string): Observable<any> {
    return this.http.get(`${this.url}?key=${this.apiKey}&MonitoringRef=${monitoringRef}`);
  }
}
