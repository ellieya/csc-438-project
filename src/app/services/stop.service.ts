import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StopService {
  url = 'https://bustime.mta.info/api/where/stop/';
  apiKey = ''; // add API Key

  constructor(private http: HttpClient) { }

  /**
   * get information on one specific stop
   *
   * @param stopId 6-digit stop ID (ex. 308214 for the stop at 5th Avenue and Union St towards Bay Ridge)
   */
  searchData(stopID: string): Observable<any> {
    return this.http.get(`${this.url}MTA_${stopID}.json?key=${this.apiKey}`);
  }
}
