import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  rootURL = '/users';

  public register():Observable<any>{
    return this.http.get(this.rootURL + '/register');
  }
  
  public login():Observable<any>{
    return this.http.get(this.rootURL + '/login');
  }

}
