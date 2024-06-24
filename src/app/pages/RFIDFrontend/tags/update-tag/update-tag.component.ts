import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-update-tag',
  templateUrl: './update-tag.component.html',
  styleUrl: './update-tag.component.scss'
})
export class UpdateTagComponent implements OnInit{
  tagid: any;
  updateForm!: FormGroup;
  itemConditions: any;
  locations: any;
  disposal:any
  csrfToken!: string;
  constructor(private api:ApiService , private route:ActivatedRoute,private formBuilder: FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.tagid = this.route.snapshot.paramMap.get('tagid');
    this.api.getApiLaravel(`items/${this.tagid}/edit`).subscribe((data:any)=>{
      this.itemConditions = data.itemConditions;
      this.locations = data.locations;
      this.disposal =data.disposals;
      console.log(this.disposal);
    });
    this.Form();
  }
  Form(): void {
    this.updateForm = this.formBuilder.group({
      itemConditionId: [''],
      locationId: [''],
      disposalId:['']
    });
  }
  onSubmit() {
    const formData = this.updateForm.value;
    this.api.putApiLaravel(`items/${this.tagid}`, formData).subscribe(
      (data: any) => {
        console.log('Item updated successfully:', data);
        this.router.navigate(['/all-tags']);
      },
      error => {
        console.error('Error updating item:', error);
      }
    );
  }
  

}
