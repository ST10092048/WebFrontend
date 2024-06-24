import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Automations } from '../../../classes/automations';
import { SharedService } from '../../../services/shared.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { ApiService } from '../../../services/api.service';
import { AutomationsDetailsComponent } from '../automations-details/automations-details.component';

@Component({
  selector: 'app-automations',
  //standalone: true,
  //imports: [],
  templateUrl: './automations.component.html',
  styleUrl: './automations.component.scss'
})
export class AutomationsComponent implements OnInit{
  automations: Automations[] = [];
  totalRecords!: any;
  page: number = 1;
  currentPage:number = 1;
  hasNextPage = true;
  page_size: number = 5;
  constructor(private _router: Router,
    private _snackbar: SnackbarService,
    private service:ApiService,
    private _shared:SharedService,
    public dialog: MatDialog,) { }
  ngOnInit(): void {
   this.loadItems(1);
  }
  loadItems(page:number) {
    this.currentPage = page;
    this.service.getApiKot('Automations',{page:page,page_size:this.page_size}).subscribe((data:any)=>{
      this.automations= data;
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
  automationDetails(name: string) {
    this.automations.forEach(Auto => {
      if (name === Auto.name) {
        this._shared.setAutomationDetails([Auto])
        // this._router.navigate(['automations-details'])
        // console.log(name)
        // console.log(Auto)

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;

        dialogConfig.data = {
          name: name
        }

        const dialogRef = this.dialog.open(AutomationsDetailsComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(data =>{
          console.log("dialog closed", data);
        })

      }
    });
  }

}
