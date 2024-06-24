import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { ApiService } from '../../../../services/api.service';
import { SnackbarService } from '../../../../services/snackbar.service';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { SharedService } from '../../../../services/shared.service';
import { delay } from 'rxjs';
import * as turf from '@turf/turf';
import { id } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-device-lastlocation',
  templateUrl: './device-lastlocation.component.html',
  styleUrl: './device-lastlocation.component.scss'
})
export class DeviceLastlocationComponent implements OnInit {
  constructor(private _snackbar:SnackbarService, private service:ApiService, private _shared: SharedService,){}
  map!: mapboxgl.Map;
  locations:any[] =[];
  ngOnInit(): void {
    this.locations = this._shared.getlastLocation();
    console.log(this.locations);
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.map = new mapboxgl.Map({
          accessToken:'pk.eyJ1IjoibmVvemEiLCJhIjoiY2xvZnkwOTRiMHh1YTJrcndmam82em42aSJ9.DAxTwxCFRRjQ_BZ7y4ODgw',
           container: 'map', // container ID
           style: 'mapbox://styles/mapbox/streets-v12', // style URL
           center:  [position.coords.longitude, position.coords.latitude],  // starting position [lng, lat]
           zoom: 15, // starting zoom
           });

         this.service.getApiKot('mapDecode', {longitude:position.coords.longitude, latitude:position.coords.latitude }).subscribe(
          (data: any) => {
            
          const popup = new mapboxgl.Popup({offset:100}).setHTML(`<h5 style="color: black;">${data[0].place_name}</h5>`);
          new mapboxgl.Marker().setLngLat([position.coords.longitude,position.coords.latitude]).setPopup(popup).addTo(this.map)
            this.addMarkers()
           
          },
          (error) => {
        
            console.error('Error fetching data:', error);
          }
        );
          
      },error=>{
        this._snackbar.openSnackbar("Please enable browser location", error.message);
      });
    };
    
       
  }
  async addMarkers() {
    const locations = this.locations;
    console.log(locations);
    this.map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: locations.map(location => [location.lng, location.lat])
          }
        }
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#888',
        'line-width': 8
      }
    });
  
    locations.forEach((location, index) => {
      if (index < locations.length - 1) {
        const bearing = turf.bearing(
          turf.point([location.lng, location.lat]),
          turf.point([locations[index + 1].lng, locations[index + 1].lat])
        );
  
        this.map.addLayer({
          id: 'arrow' + index,
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [location.lng, location.lat]
              },
              properties: {}
            }
          },
          layout: {
            'icon-image': 'arrow',
            'icon-rotate': bearing,
            'icon-size': 0.8,
            'icon-allow-overlap': true
          }
        });
      }
  
      setTimeout(() => {
        this.service.getApiKot('mapDecode', { longitude: location.lng, latitude: location.lat })
          .subscribe(
            (data: any) => {
              new mapboxgl.Marker()
                .setLngLat([location.lng, location.lat])
                .setPopup(new mapboxgl.Popup().setHTML(`<h5 style="color: black;">${data[0].place_name}</h5>
                <h5 style="color: black;">${location.created_at}</h5>`))
                .addTo(this.map);
              console.log(location);
            },
            error => {
              console.error('Error fetching location data', error);
            }
          );
      }, index * 500);
    });
  }
  
  

}
