import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DashboardProps } from './DashboardInterface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getAllData(clientId:any,params:any):Observable<DashboardProps[]>{
    return this.http.get<DashboardProps[]>('http://localhost:8888/v1/dashboard/'+clientId+"/"+params.toString())
  }

  deleteData(clientId:any,params:any){
    console.log('clientId',clientId)
    console.log('params',params)
    return this.http.delete('http://localhost:8888/v1/dashboard/'+clientId+"/"+params)
  }
}
