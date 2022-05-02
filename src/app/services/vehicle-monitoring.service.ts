import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleMonitoringService {
  url = 'https://bustime.mta.info/api/siri/vehicle-monitoring.json';
  apiKey = ''; // add API Key

  constructor(private http: HttpClient) { }

  /**
   * get data from the MTA BusTime API
   * request information about one, some, or all vehicles monitored by the MTA Bus Time system
   *
   * @param lineRef a filter by 'fully qualified' route name, GTFS agency ID + route ID (ex. M5)
   */
  searchData(lineRef: string): Observable<any> {
    return this.http.get(`${this.url}?key=${this.apiKey}&LineRef=${lineRef}`);
  }
}
