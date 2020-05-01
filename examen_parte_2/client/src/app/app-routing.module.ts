import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import {TaskComponent} from './components/task/task.component'
import {PrivateTaskComponent} from './components/private-task/private-task.component'
import {SigninComponent} from './components/signin/signin.component'
import {SignupComponent} from './components/signup/signup.component'

import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskComponent
  },
  {
    path: 'private-tasks',
    component: PrivateTaskComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
