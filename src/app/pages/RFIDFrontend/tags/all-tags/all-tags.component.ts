import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-tags',
  templateUrl: './all-tags.component.html',
  styleUrl: './all-tags.component.scss'
})
export class AllTagsComponent implements OnInit {
  allTags:any;
  constructor(private api:ApiService ,private router:Router){}
  ngOnInit(): void {
    this.loadItem()
  }
  loadItem(){
    this.api.getApiLaravel('all-tags').subscribe((data:any)=>{
      this.allTags = data;
      console.log(this.allTags);
    });
  }
  update(tagid:any){
    this.router.navigate(['/update-tag', tagid]);
  }

}
