import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
//import { environment } from '../../environments/environment.development';


const adminServer = environment.AdminServerUrl;
const preyServer = environment.PreyServerUrl;
const LaravelGates = environment.LaravelGates;
const LaravelFixedReader = environment.LaravelFixedReader;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  
  
  
  getNextPage(nextPageUrl: string): Observable<any> {
    return this._http.get(nextPageUrl);
  }
  getApiLaravel(url:string,customParams: { [key: string]: any } = {}){
    let params = new HttpParams();
    Object.keys(customParams).forEach(key => {
      params = params.set(key, customParams[key]);
    });
    return this._http.get<any>(LaravelGates + url,{params});
  }
  getApiLaravelFR(url:string,customParams: { [key: string]: any } = {}){
    let params = new HttpParams();
    Object.keys(customParams).forEach(key => {
      params = params.set(key, customParams[key]);
    });
    return this._http.get<any>(LaravelFixedReader + url,{params});
  }
  putApiLaravel(url: string, body: any){
    return this._http.put<any>(LaravelGates + url, body);
  }
  deleteLaravel(url: string){
    return this._http.delete<any>(LaravelGates + url)
  }
  postLaravel(url: string, body: any){
    return this._http.post<any>(LaravelGates+ url,body);
  }

  getApiKot(url: string, customParams: { [key: string]: any } = {}) {
    let params = new HttpParams();
    Object.keys(customParams).forEach(key => {
      params = params.set(key, customParams[key]);
    });
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this._http.get<any>(preyServer + url, { headers, params });
  }
  

  putApiKot(url: string, body: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this._http.put<any>(preyServer + url, body,{headers})
  }
  postApiKot(url: string, body: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this._http.post<any>(preyServer + url, body,{headers});
  }


  login(empNumber: string, Empassword: string) {
    return this._http.post<any>(adminServer + `login`, { empNumber, Empassword });
  }
  admin(AdminEmail: string, AdminPassword: string) {
    return this._http.post<any>(adminServer+ `admin`, { AdminEmail, AdminPassword });
  }
  register(data:any){
    return this._http.post(adminServer+'admin/register',data);
  }
}
