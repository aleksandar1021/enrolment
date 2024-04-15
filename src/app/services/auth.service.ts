import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:44381/api/";

  AddUser(user: User){
    return this.http.post(this.baseServerUrl + "User/CreateUser" , user, {
      responseType: "json"
    });
  }

  Login(user: User){
    return this.http.post(this.baseServerUrl + "User/Login" , user, {
      responseType: "json"
    });
  }
}
