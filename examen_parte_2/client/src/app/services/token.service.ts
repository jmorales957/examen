import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) { }

  intercept(req, next) {
   let token = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.token()}`
      }
    })
    return next.handle(token)
  }

}
