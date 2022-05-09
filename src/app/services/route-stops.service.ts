import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteStopsService {
  url = 'https://bustime.mta.info/api/where/stops-for-route/';
  apiKey = ''; // add API Key

  constructor(private http: HttpClient) { }

  /**
   * get information on the stops that serve a route
   *
   * @param route bus route (ex. M5)
   */
  searchData(route: string): Observable<any> {
    return this.http.get(`${this.url}MTA%20NYCT_${route}.json?key=${this.apiKey}&includePolylines=false&version=2`);
  }
}
