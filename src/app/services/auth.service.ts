import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user.interface';
import { development } from '../../environments/development';
import jwt_token, { JwtPayload, jwtDecode } from 'jwt-decode';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  currentUser() : any{
    try{
      let token = localStorage.getItem("token");
      let decodedToken = token != null ? jwtDecode(token) : null
      return decodedToken;
    }catch(e){
      return null
    }
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

  logout() : void{
    localStorage.removeItem("token");
    this.router.navigateByUrl("login")
  }

  isLogged() : boolean {
    let user = this.currentUser();
    if(user == null)
      return false;
    return user.exp < Date.now();
  }
}
