import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  latitude: number;
  longitude: number;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {
  }


  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      


      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.map.addListener('dragend', () => {

        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();
      });

      let marker = new google.maps.Marker({
        position: latLng,
        title: "Hello World!",
      });

      marker.setMap(this.map); 

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
