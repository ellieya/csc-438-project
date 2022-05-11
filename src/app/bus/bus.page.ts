import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.page.html',
  styleUrls: ['./bus.page.scss'],
})
export class BusPage implements OnInit {

  constructor(private http: HttpClient) { }

  res = {};
  oba = [];
  busRoutes;
  shortName;
  longName;
  stopName;
  arrivalTime;
  stopsAway;
  description;

  ngOnInit() {
    this.http.get("https://us-central1-csc438-project.cloudfunctions.net/app/bus/stop_data/MTA_200021").subscribe( (res:any) => {
      this.res = res;
      this.oba=res.OBA[0];

      this.stopName = res.OBA[0].name[0] //Stop intersection

      this.shortName = res.OBA[0].routes[0].route[0].shortName[0];

      this.longName = res.OBA[0].routes[0].route[0].longName[0]

      this.description = res.OBA[0].routes[0].route[0].description[0];

      this.arrivalTime = res.SIRI.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime.substr(11,5)
      
      this.stopsAway = res.SIRI.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.NumberOfStopsAway;
    });
  }

}
