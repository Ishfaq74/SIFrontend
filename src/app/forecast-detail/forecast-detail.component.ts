import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';
import { DashboardProps } from '../dashboard/DashboardInterface';
import { DashboardSchema } from '../dashboard/dashboardSchema';
import {Location} from '@angular/common';

@Component({
  selector: 'app-forecast-detail',
  templateUrl: './forecast-detail.component.html',
  styleUrls: ['./forecast-detail.component.scss']
})
export class ForecastDetailComponent implements OnInit {

  Data:DashboardProps[]=[]
  schema:DashboardSchema[]=[]
  page:number=0
  totalRecords: number=0;
  first = 0;
  rows = 10;
  optionpage=[10,25,50];
  selectedProduct2= this.Data;
  search=''
  constructor(
    private router: Router,
    private service:DashboardService,
    private location:Location) { }

  ngOnInit(): void {
    // this.service.getAllData().subscribe(items=> {
    //   if(items.length>0){
    //     Object.keys(items[0]).forEach(key=>{
    //       this.schema.push({header:key,field:key});
    //     })
    //   }

      
      
    //   this.Data=items
    
    //   this.totalRecords=this.Data.length;
    
    // })
  }
  onRowSelect(event:any){
    this.router.navigate(['/forecastDetail'])
  }
  onRowUnselect(event:any){
    console.log("event-unselect",event);
    alert("unselect")

  }

  goBack(){
this.location.back()
  }

}
