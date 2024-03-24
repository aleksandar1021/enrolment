import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';



@Component({
  
  selector: 'app-login',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private titleService: Title) { 
    this.titleService.setTitle('Login');
  }
  
}
