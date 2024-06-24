import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { SharedService } from '../../../../services/shared.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { jsPDF } from 'jspdf';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-reports-details',
  templateUrl: './reports-details.component.html',
  styleUrl: './reports-details.component.scss'
})
export class ReportsDetailsComponent implements OnInit {
  constructor(private _service: ApiService,
    private _shared: SharedService,
    public dialog: MatDialog){}
    details:any;
    geoData:any;
    lat:any;
    lng:any;
    LaptopDetailedReports: any;
    testData:any;
    map!: mapboxgl.Map;
  async ngOnInit(): Promise<void> {
    this.details=this._shared.getReportDetails();
    console.log(this.details);
    this.LaptopDetailedReports = this._shared.getDeviceDetails();
    this.lat = this.details.lat;
    this.lng = this.details.lng;
      this.map = new mapboxgl.Map({
        accessToken:'pk.eyJ1IjoibmVvemEiLCJhIjoiY2xvZnkwOTRiMHh1YTJrcndmam82em42aSJ9.DAxTwxCFRRjQ_BZ7y4ODgw',
         container: 'map', // container ID
         style: 'mapbox://styles/mapbox/streets-v12', // style URL
         center:  [this.lng, this.lat],  // starting position [lng, lat]
         zoom: 15, // starting zoom
         });
         this.map.on('load', () => {
          this._service.getApiKot('mapDecode',{longitude:this.details.lng,latitude:this.details.lat}).subscribe((data:any)=>{  
          this.geoData = data[0];
          this.testData =data[0];
          console.log(this.testData);
          const popup = new mapboxgl.Popup({offset:100}).setHTML(`<h5 style="color: black;">${data[0].place_name}</h5>`);
          new mapboxgl.Marker().setLngLat([this.lng,this.lat]).setPopup(popup).addTo(this.map)    
          },error=>{
            console.error('Error fetching data:', error);
          });
        });

      // try {
      //   const data: any = await this.http.get('http://localhost:8081/mapDecode', {headers, params }).toPromise();
      //   this.testData = data[0];
        
      //   console.log('Data received:', this.testData);
      // } catch (error) {
      //   console.error('Error fetching data:', error);
      // }
    console.log('data'+this.testData);
    console.log(this.testData);
   
  }
  async generatePDF() {

    // Create a new instance of jsPDF
    const pdf = new jsPDF({
      orientation: 'landscape'
    });
  
    pdf.text(`Report Number : ${this.details.reportkey}`, 20, 20);
  
   
    const imgWidth = 100;
    const imgHeight = 80;
    pdf.addImage('data:image/jpeg;base64,' + this.details.picture, 'JPEG', 20, 30, imgWidth, imgHeight);
    pdf.addImage('data:image/jpeg;base64,' + this.details.screenshot, 'JPEG', 20 + imgWidth + 10, 30, imgWidth, imgHeight);

    const infoText = `
      -----------------------------------------------------------------------------------------------------------------------------
      Physical Address  :${this.testData.place_name}
      Coordinates       :Latitude: ${this.details.lat} & Longitude: ${this.details.lng}
      -----------------------------------------------------------------------------------------------------------------------------
      WIFI              :${this.details.ssid}
      Gateway IP        : ${this.details.gateway_ip}
      Name              : ${this.LaptopDetailedReports.name}
      Description       : ${this.LaptopDetailedReports.description}
      Operating System  : ${this.LaptopDetailedReports.os_details.os} ${this.LaptopDetailedReports.os_details.os_version_name} Version: ${this.LaptopDetailedReports.os_details.os_version}
      Serial Number     : ${this.LaptopDetailedReports.device_details.hardware[0].data[0].serial_number}
      Logged in User    : ${this.LaptopDetailedReports.logged_user}
      Class Description : ${this.LaptopDetailedReports.type}
      ------------------------------------------------------------------------------------------------------------------------------
      Report generated on:${this.details.created_at}
      ------------------------------------------------------------------------------------------------------------------------------
    `;
  
    pdf.text(infoText, 20, 120);
  
    pdf.save(`${this.details.reportkey}.pdf`);
  }

}
