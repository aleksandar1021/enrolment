import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { development } from '../environments/development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  addUser(user: User){
    return this.http.post(development.apiUrl + "User/CreateUser" , user, {
      responseType: "json"
    });
  }

  login(user: User){
    return this.http.post(development.apiUrl + "User/Login" , user, {
      responseType: "json"
    });
  }
}
