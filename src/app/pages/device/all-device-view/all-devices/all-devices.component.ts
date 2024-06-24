import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '../../../../services/api.service';
import { SnackbarService } from '../../../../services/snackbar.service';
import { SharedService } from '../../../../services/shared.service';
import { ngxCsv } from 'ngx-csv';


@Component({
  selector: 'app-all-devices',
  templateUrl: './all-devices.component.html',
  styleUrl: './all-devices.component.scss'
})
export class AllDevicesComponent {


  totalRecords!: any;
  page: number = 1;
  searchQuery = '';
  page_size: number = 5;
  TheDevices: any[] = [];
  view = false
  currentPage: number = 1;
  hasNextPage = true;
  deviceData: any;


  constructor(private _shared: SharedService,
    private _router: Router,
    private service: ApiService,
    private _snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.loadData(1);
  }
  loadData(page: number) {
    this.currentPage = page;
    this.service.getApiKot('all', { page: page, page_size: this.page_size }).subscribe((data: any) => {
      this.TheDevices = data;
      this.hasNextPage = data.length === this.page_size;
      console.log(this.TheDevices);
    }, error => {
      this._snackbar.openSnackbar("Error loading server, please try again later", error);
    });
  }
  nextPage() {
    if (this.hasNextPage) {
      this.loadData(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.loadData(this.currentPage - 1);
    }
  }

  deviceDetails(id: any) {

    this.service.getApiKot(`deviceLocation/${id}`).subscribe((data) => {
      this.deviceData = data;
    });


    this.TheDevices.forEach(device => {
      if (id === device.id) {
        let mapData = {
          id: id,
          lat: device.location.lat,
          lng: device.location.lng
        }
        this._shared.setMapData(mapData);
        this._shared.setDeviceDetails(device)
        this._router.navigate(['deviceDetails']);
      }

    });
  }



  generateCsv() {

    const data: any = []

    this.TheDevices.forEach(device => {
      console.log(device);
      let pdfData = {
        name: device.name,
        client_outdated: device.client_outdated,
        client_version: device.client_version,
        description: device.description,
        id: device.id,
        // labels: device.labels[0].name,
        missing: device.missing,
        os_details: device.os_details.os,
        type: device.type,
        user: device.user.email,
        last_seen_on:device.last_seen_on
      }

      data.push(pdfData);
    });

    console.log(data);

    let options = {
      title: 'Device Details',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseperator: '.',
      showLabels: false,
      noDownload: false,
      showTitle: false,
      useBom: false,
      headers: ['name', 'client_outdated', 'client_version', 'description', 'id', 'missing', 'os_details', 'type', 'user','last_seen_on']
    };
    const currentTime = new Date().toLocaleString();
    new ngxCsv(data, `devices-report-${currentTime}`, options);

  }

  gridView() {
    this.view = false;

  }

  cardView() {
    this.view = true;
  }
  resetSearch() {
    this.loadData(1);
  }

  filterData() {
    if (this.searchQuery) {
      const searchLower = this.searchQuery.toLowerCase();
      this.TheDevices = this.TheDevices.filter(item =>
        item.name.toLowerCase().includes(searchLower)
      );
    } else {
      this.TheDevices = this.TheDevices;
    }
  }

}
