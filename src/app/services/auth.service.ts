import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user.interface';
import { development } from '../../environments/development';
import jwt_token, { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  currentUser() : any{
    let token = localStorage.getItem("token");
    let decodedToken = token != null ? jwtDecode(token) : null
    return decodedToken;
  }

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

  isLogged() : Boolean{
    let user = this.currentUser();
    return user.exp > Date.now();
    
  }
}
