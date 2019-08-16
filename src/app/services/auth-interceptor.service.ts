import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private _authService: AuthService) { }

  intercept(req, next) {
    var reqClone = req.clone({
      headers: new HttpHeaders().set("authtoken", this._authService.checkLogin())
    });
    return next.handle(reqClone);
  }
}

