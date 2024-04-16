import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelperService = new JwtHelperService();

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

  CurrentUSer(){
    let token = localStorage.getItem("token");
    let userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;
    
  }
}
