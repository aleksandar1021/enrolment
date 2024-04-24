import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup , ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';

@Component({
  
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers : [
    AuthService
  ]
})
export class LoginComponent implements OnInit{
  message: String = ''
  constructor(private titleService: Title, private authService: AuthService, private router: Router) { 
    this.titleService.setTitle('Login');
  }
  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.minLength(8), Validators.required])

  })

  loginSumbited() : void{
    // this.authService.addUser(
    //   {
    //     name: "Aleksandar", 
    //     lastName: "Kandic", 
    //     email: "aleksa_kandic@yahoo.com", 
    //     password: "lozinka123",
    //     roleId: 1
    //   }).subscribe(response => {
    //     console.log(response)
    //   })

    if(this.loginForm.valid){
      this.authService.login(
        {
          email: this.Email.value, 
          password: this.Password.value
        }).subscribe((response: any) => {
          this.setToken(String(response.jwtToken));
          this.router.navigateByUrl("home");
        },(error) => {
          this.message = error.error.message;
      })}
  }
        
  setToken(token: string) : void{
    localStorage.setItem("token", token);
  }

  get Email() : FormControl{
    return this.loginForm.get("email") as FormControl;
  }

  get Password() : FormControl{
    return this.loginForm.get("password") as FormControl;
  }
  
}
