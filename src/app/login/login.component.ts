import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup , ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
@Component({
  
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers : [
    AuthService
  ]
})
export class LoginComponent implements OnInit{
  message: String = ''
  constructor(private titleService: Title, private authService: AuthService) { 
    this.titleService.setTitle('Login');
  }
  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.minLength(8), Validators.required])

  })

  loginSumbited(){
    // this.authService.AddUser(
    //   {
    //     Name: "Aleksandar", Lastname: "Kandic", Email: "aleksa_kandic@yahoo.com", Password: "lozinka123"
    //   }).subscribe(response => {
    //     console.log(response)
    //   })

    if(this.loginForm.valid){
      this.authService.Login(
        {
          email: this.Email.value, password: this.Password.value
        }).subscribe((response: any) => {
          
          if(response.status !== "logged"){
            this.message = response.message;
          }
          else{
            console.log(response.token)
            this.setToken(response.token);
          }
          
          

          if(response.message == "JWT"){
            location.href = "/home";
          }
        })
    }
  }

  setToken(token: string){
    localStorage.setItem("jwtToken", token);
  }

  get Email() : FormControl{
    return this.loginForm.get("email") as FormControl;
  }

  get Password() : FormControl{
    return this.loginForm.get("password") as FormControl;
  }
  
}
