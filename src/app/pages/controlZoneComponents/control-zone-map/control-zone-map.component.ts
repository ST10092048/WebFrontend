import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-control-zone-map',
  templateUrl: './control-zone-map.component.html',
  styleUrl: './control-zone-map.component.scss'
})
export class ControlZoneMapComponent implements OnInit{
  id:any;
  lat:any;
  lng:any;
  radius:any;
  color:any;
  geoData:any;
  LaptopDetailedReports:any;
  map!: mapboxgl.Map;
  constructor(private _shared:SharedService){}
  ngOnInit(): void {
    this.id = this._shared.getZonesDetails()[0].id;
    this.lat = this._shared.getZonesDetails()[0].lat;
    this.lng = this._shared.getZonesDetails()[0].lng;
    this.radius = this._shared.getZonesDetails()[0].radius;
    this.color = this._shared.getZonesDetails()[0].color;
    this.map = new mapboxgl.Map({
      accessToken:'pk.eyJ1IjoibmVvemEiLCJhIjoiY2xvZnkwOTRiMHh1YTJrcndmam82em42aSJ9.DAxTwxCFRRjQ_BZ7y4ODgw',
       container: 'map', // container ID
       style: 'mapbox://styles/mapbox/streets-v12', // style URL
       center:  [this.lng, this.lat],  // starting position [lng, lat]
       zoom: 15, // starting zoom
       });
       this.map.scrollZoom.disable(); // Disable scroll zoom
       this.map.boxZoom.disable(); // Disable box zoom
       this.map.dragRotate.disable(); // Disable drag to rotate
       this.map.dragPan.disable(); // Disable drag to pan
       this.map.keyboard.disable(); // Disable keyboard navigation
       this.map.doubleClickZoom.disable(); // Disable double click to zoom
       this.map.touchZoomRotate.disable(); // Disable pinch to zoom/rotatemap.scrollZoom.disable(); // Disable scroll zoom
       this.map.boxZoom.disable(); // Disable box zoom
       this.map.dragRotate.disable(); // Disable drag to rotate
       this.map.dragPan.disable(); // Disable drag to pan
       this.map.keyboard.disable(); // Disable keyboard navigation
this.map.doubleClickZoom.disable(); // Disable double click to zoom
this.map.touchZoomRotate.disable(); // Disable pinch to zoom/rotate
       this.map.on('load', () => {
        this.map.addSource(this.id, {
          type: 'geojson',
          data: {
              "type": "FeatureCollection",
              "features": [{
                  "type": "Feature",
                  "properties": {
                   
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                        this.lng,
                        this.lat
                      ]
                  }
              }]
          }
      });
      this.map.addLayer({
      'id': this.id,
      'type': 'circle',
      'source': this.id,
      'paint': {
      'circle-color':this.color,
      'circle-radius':this.radius,
      "circle-opacity":0.5
      },
      
      });
    });
   
  }

}
