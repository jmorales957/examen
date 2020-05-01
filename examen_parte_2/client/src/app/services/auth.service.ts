import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router  } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient,private router : Router) {}

  signUp(user) {

    return this.http.post<any>(this.URL + '/auth/register',user)
  }

  signIn(user) {

    return this.http.post<any>(this.URL + '/auth/login',user)
  }

  loggenIn() {
    return !!localStorage.getItem('token')
  }

  token() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/signin'])

  }
}
