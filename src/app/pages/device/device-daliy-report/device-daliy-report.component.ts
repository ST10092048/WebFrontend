import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-device-daliy-report',
  templateUrl: './device-daliy-report.component.html',
  styleUrl: './device-daliy-report.component.scss'
})
export class DeviceDaliyReportComponent {
  DeviceReportHeaders: any;
  DeviceReport: any;
  tags:any;
  page :number = 1;
  per_page:number = 5;
  search:string ='';
  totalItems: any;
  totalPages: any;
  selectedDate: Date = new Date();
  nextPageUrl: any;
  isDataAvailable: boolean = false;
  previousPageUrl: any;
  csvReport:any;

  constructor(private api:ApiService, private router:Router){}
ngOnInit(): void {
 this.loadItems();
}
delete(arg0: any) {

}

downloadReport() {
  this.generateCSV();
  }
  loadReport(){
    this.api.getApiLaravel('DeviceDaliyReportCsv',{
      search: this.search
    }).subscribe((data:any)=>{
      this.csvReport = data.data;
      console.log(this.csvReport);
      this.isDataAvailable = this.csvReport && this.csvReport.length > 0;
    },error =>{
      console.log(error);;
    });
  }
  
loadItems() {
  this.api.getApiLaravel('DeviceDaliyReport', {
    search: this.search
  }).subscribe((data: any) => {
    this.DeviceReport = data.data;
    this.totalItems = data.pagination.total;
    this.nextPageUrl = data.pagination.nextPageUrl;
    this.previousPageUrl = data.pagination.previousPageUrl;
    this.calculateTotalPages();
    const keys = Object.keys(this.DeviceReport[0]);
    this.DeviceReportHeaders = keys;
    console.log(this.DeviceReport);
  }, error => {
    console.log(error)
  });
}

nextPage() {
  if (this.nextPageUrl) {
    this.loadItemsFromUrl(this.nextPageUrl);
    this.page++;
  }
}
resetSearch(){
  this.search = '';
  this.loadItems(); 
}

previousPage() {
  if (this.previousPageUrl) {
    this.loadItemsFromUrl(this.previousPageUrl);
    this.page--;
  }
}

private loadItemsFromUrl(url: string) {
  this.api.getNextPage(url).subscribe((data: any) => {
    this.DeviceReport = data.data;
    this.totalItems = data.pagination.total;
    this.nextPageUrl = data.pagination.nextPageUrl;
    this.previousPageUrl = data.pagination.previousPageUrl;
  }, (error: any) => {
    console.log(error);
  });
}
calculateTotalPages() {
  this.totalPages = Math.ceil(this.totalItems / this.per_page);
}


DateSearch() {
  if (this.selectedDate) {
    this.page = 1;
    const year = this.selectedDate.getFullYear();
    const month = this.padZero(this.selectedDate.getMonth() + 1);
    const day = this.padZero(this.selectedDate.getDate());
    const formattedDate = `${year}-${month}-${day}`;
    this.search = formattedDate;
    this.loadItems();
    this.loadReport();
  } else {
    console.error('Invalid date input:', this.selectedDate);
  }
}

padZero(num: number): string {
  return num < 10 ? '0' + num : num.toString();
}
generateCSV(): void {
  if (!this.csvReport || this.csvReport.length === 0) {
    console.error('No data available for the CSV report.');
    return;
  }
  const filteredData = this.csvReport.filter((item: any) => {
    return new Date(item.Report_Date).toDateString() === this.selectedDate.toDateString();
  });

  console.log('Filtered Data:', filteredData); 
  if (filteredData.length === 0) {
    console.error('No data available for the selected date.');
    return;
  }

  const keys = Object.keys(filteredData[0]);
  let csvContent = keys.map(key => `"${key}"`).join(',') + '\n';
  csvContent += filteredData.map((item: any) => keys.map(key => `"${item[key]}"`).join(',')).join('\n'); 

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `DailyReport_on_${this.selectedDate.toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  window.URL.revokeObjectURL(url);
}


}
