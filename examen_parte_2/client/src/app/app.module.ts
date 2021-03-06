import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TaskComponent } from './components/task/task.component';
import { PrivateTaskComponent } from './components/private-task/private-task.component';

import { AuthGuard } from "./auth.guard";
import { TokenService } from "./services/token.service";
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TaskComponent,
    PrivateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
