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

  ngOnInit() {
    this.http.get("https://us-central1-csc438-project.cloudfunctions.net/app/bus/stop_data/MTA_300006").subscribe( (res:any) => {
      this.res = res; 
      this.oba=res.OBA[0]; 
    });
  }

  logRes() {
    console.log(this.res);
    console.log(this.oba);
  }

}
