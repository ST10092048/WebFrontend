import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { SharedService } from '../../../../services/shared.service';
import { SnackbarService } from '../../../../services/snackbar.service';

@Component({
  selector: 'app-reports',

  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {
  isLoading=false;
  LaptopReports: any[] = [];
  details: any;
  mover: any
  currentPage:number = 1;
  hasNextPage = true;
  page_size: number = 5;
  totalRecords!: any;
  constructor(private _service: ApiService,
    private _shared: SharedService,
    private _router: Router,
    private _snackbar: SnackbarService,
    public dialog: MatDialog) { }
  ngOnInit(): void {
    this.mover = this._shared.getDeviceDetails();
    console.log(this.mover.id);
    this.loadItems(1);
  }
  reportDetails(key: any) {
    this.isLoading=true;
    this._service.getApiKot(`reports/${this.mover.id}/${key}`).subscribe((data: any[]) => {
      this._shared.setReportDetails(data[0]);
      this.isLoading=false;
      this._router.navigate(['detailed-report']);
      console.log(data);
    });
  }
  loadItems(page:number) {
    this.isLoading=true;
    this.currentPage = page;
    this._service.getApiKot(`reports/${this.mover.id}`, { page: page, page_size: this.page_size }).subscribe((data: any[]) => {
      this.isLoading=false;
      this.details = data;
      this.hasNextPage = data.length === this.page_size;
    }, error => {
      this._snackbar.openSnackbar('Server error', error);
      this.isLoading=false;
    });
  }
  nextPage() {
    if (this.hasNextPage) {
      this.isLoading=true;
      this.loadItems(this.currentPage + 1);
      this.isLoading=false;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.isLoading=true;
      this.loadItems(this.currentPage - 1);
      this.isLoading=false;
    }
  }

}
