import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent }
];
@NgModule({
    
    imports: [  RouterModule.forRoot(routes),
                ReactiveFormsModule
            ],
    exports: [RouterModule],
    providers : [
        AuthService
    ]
})
export class AppRoutingModule { }