import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { Zones } from '../../../classes/zones';
import { SnackbarService } from '../../../services/snackbar.service';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-control-zones',
  templateUrl: './control-zones.component.html',
  styleUrl: './control-zones.component.scss'
})
export class ControlZonesComponent implements OnInit {
  ZoneInfo!: any[];
  zones: Zones[] = [];
  totalRecords!: any;
  page: number = 1;
  page_size: number = 5;
  currentPage:number = 1;
  hasNextPage = true;

  constructor(private _router: Router,
    private _shared: SharedService,
    private _snackbar: SnackbarService,private service:ApiService) { }
  ngOnInit(): void {
    this.loadItems(1);
  }
  loadItems(page:number) {
    this.currentPage = page;
    this.service.getApiKot('Zones',{page:page,page_size:this.page_size}).subscribe((data:any)=>{
      this.zones =data;
      this.hasNextPage = data.length === this.page_size;
    },error=>{
      this._snackbar.openSnackbar("Error loading server, please try again later", error);
    });
  }
  nextPage() {
    if (this.hasNextPage) {
      this.loadItems(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.loadItems(this.currentPage - 1);
    }
  }

  
  createZone() {
    this._shared.setZoneDetails([this.zones])
    this._router.navigate(['create-zone']);
  }
  zoneDetails(id: any) {
    this.zones.forEach(zone => {
      if (id === zone.id) {
        console.log(id)
        let mapData = {
          id: id,
          lat: zone.lat,
          lng: zone.lng
        }
        this._shared.setMapData(mapData)
        this._shared.setZoneDetails([zone])
        this._router.navigate(['control-zone-details'])
        // console.log(name)
        // console.log(zone)
      }
    });
    
  }
}
