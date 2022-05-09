import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  url = 'https://bustime.mta.info/api/where/routes-for-agency/MTA%20NYCT.json';
  apiKey = ''; // add API Key

  constructor(private http: HttpClient) { }

  /**
   * get the full list of available bus routes
   */
  searchData(): Observable<any> {
    return this.http.get(`${this.url}?key=${this.apiKey}`);
  }
}
