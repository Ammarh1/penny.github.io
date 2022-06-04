import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({providedIn: "root"})
export class AuthService1 {
  private BaseUrl = 'http://localhost:3333'

  constructor(private http: HttpClient) { }

  Login(email:String , password:String): Observable<any> {
    const url = `${this.BaseUrl}/login`
    return this.http.post<User>(url,{email,password},{withCredentials: true})
  }

  SignUp(name: String ,email:String, password:String): Observable<any> {
    const url = `${this.BaseUrl}/signup`
    return this.http.post<User>(url, {name,email,password});
  }

  Logout(): Observable<any> {
    const url = `${this.BaseUrl}/logout`
    return this.http.post(url,{},{withCredentials: true});
  }

  Products(): Observable<any> {
    const url = `${this.BaseUrl}/product`
    return this.http.get(url,{withCredentials: true});
  }


}

  

