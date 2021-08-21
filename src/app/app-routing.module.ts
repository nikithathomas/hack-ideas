import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHackIdeasComponent } from './add-hack-ideas/add-hack-ideas.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HackChallengesComponent } from './hack-challenges/hack-challenges.component';
import { LoginGuardGuard } from './login-guard.guard';

const routes: Routes = [
  { path: 'login', component: EmployeeLoginComponent },
  {
    path: 'home', component: HackChallengesComponent, canActivate: [LoginGuardGuard],
    children: [{ path: 'addHack', component: AddHackIdeasComponent }]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
