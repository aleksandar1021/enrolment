import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserLayoutComponent } from './user-layout/user-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'user',
    canActivate: [AuthGuard],
    component: UserLayoutComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
  //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/login' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService],
})
export class AppRoutingModule {}
