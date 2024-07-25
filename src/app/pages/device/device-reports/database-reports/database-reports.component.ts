import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { SharedService } from '../../../../services/shared.service';
import { SnackbarService } from '../../../../services/snackbar.service';

@Component({
  selector: 'app-database-reports',
  templateUrl: './database-reports.component.html',
  styleUrl: './database-reports.component.scss'
})
export class DatabaseReportsComponent implements OnInit{
  isLoading = false;
  constructor(private _service: ApiService,
    private _shared: SharedService,
    private _router: Router,
    private _snackbar: SnackbarService,
    public dialog: MatDialog) { }
    currentPage:number = 1; 
  hasNextPage = true;
  AllReports:any;
  page: number = 1;
  page_size:number=5;
  itemCount:any;
  totalPages!: number;
  ngOnInit(): void {
    this.loadItems();
  }
  loadItems() {
    this.isLoading = true;
    this._service.getApiKot(`report/data`, {page:this.page, page_size: this.page_size }).subscribe((data:any) => {
      this.AllReports = data.reports;
      this.itemCount = data.count;
      this.calculateTotalPages();
    }, error => {
      this.isLoading = false;
      this._snackbar.openSnackbar('Server error', error);
    });
  }
  nextPage(){
    this.isLoading=true;
    this.page++;
    this.loadItems();
    this.isLoading=false;
}
previousPage(){
  if(this.page>1){
    this.isLoading=true;
    this.page--;
    this.loadItems();
    this.isLoading=false;
  }
}
calculateTotalPages() {
  this.totalPages = Math.ceil(this.itemCount / this.page_size);
}
  reportDetails(device_id: any,reportkey:any) {
    this._service.getApiKot(`reports/${device_id}/${reportkey}`).subscribe((data: any[]) => {
      this._shared.setReportDetails(data[0])
      this._router.navigate(['detailed-report']);
      console.log(data)
    });
  }
}
