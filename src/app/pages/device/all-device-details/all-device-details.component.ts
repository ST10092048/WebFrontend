import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { SharedService } from '../../../services/shared.service';
import { DeviceHardwareComponent } from '../device-details/device-hardware/device-hardware.component';
import { AlarmComponent } from '../../deviceActions/alarm/alarm.component';
import { LockComponent } from '../../deviceActions/lock/lock.component';
import { AlertComponent } from '../../deviceActions/alert/alert.component';

@Component({
  selector: 'app-all-device-details',
  // standalone: true,
  // imports: [],
  templateUrl: './all-device-details.component.html',
  styleUrl: './all-device-details.component.scss'
})
export class AllDeviceDetailsComponent implements OnInit{
  deviceInfos!: any[];
  isLoading = false;
  details: any;
  locations: any[]=[];
  locationData: any;

  constructor(private _service: ApiService,
    private _shared: SharedService,
    private _router: Router,
    public dialog: MatDialog, private http:HttpClient){}

  ngOnInit(): void {
    this.details = this._shared.getDeviceDetails();
    console.log(this.details);
  }

  lock(id: any){
    console.log(id)

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: id
    }
    
    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(LockComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      console.log("dialog closed", data);
    })

  }

  alert(id: any){
    console.log(id)

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: id
    }
    
    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(AlertComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      console.log("dialog closed", data);
    })

  }

  alarm(id: any){
    console.log(id)

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: id
    }
    
    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(AlarmComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      console.log("dialog closed", data);
    })

  }

  missing(id: any){
    this.isLoading = true;
    if (this.details.missing == false) {
      let body = {
        missing: true,
        options: {
          report_frequency: "2"
        }
      }
      
      this._service.putApiKot(`admin/device/${id}/missing`, body).subscribe(data =>{
        console.log(data);
        this.isLoading = false;
      })

    }else if (this.details.missing == true) {
      let body = {
        missing: false,
        options: {
          report_frequency: "2"
        }
      }
      console.log(body)
      this._service.putApiKot(`device/${id}/missing`, body)
      this.isLoading = false;
      
    }
  }

  hardware(){
    this.isLoading = true;
    // console.log(this.details.device_details.hardware);
    this._shared.setDeviceHardware(this.details.device_details.hardware)
    // this._router.navigate(['device-hardware']);
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(DeviceHardwareComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      console.log("dialog closed", data);
    })
    this.isLoading = false;
  }
  reports() {
     this._router.navigate(['report']);
  }
  location(id: any) {
    this.isLoading = true;
    this._service.getApiKot(`lastLocation/${id}`).subscribe((data: any) => {
      this.locations = data;
    this.locations.forEach(location => {
      
      // console.log(location);
     
    });
    this._shared.setlastLocation(data)
      
      this._router.navigate(['last-location'])
      this.isLoading = false;
    });
  }
}
