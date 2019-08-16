import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $auth = new BehaviorSubject(this.checkLogin());
  constructor(private _router: Router, private _http: HttpClient) { }

  login(credentials) {
    this._http.post("http://localhost:3000/authenticate", credentials).subscribe((data: any) => {
      if (data.isLoggedIn) {
        localStorage.setItem("token", data.token);
        this._router.navigate(['/welcome']);
        this.$auth.next(this.checkLogin());
        // this.$auth.next(data);
      } else {
        alert(' Email or username is wrong, please sign in again!');
        return false;
      }
    });
  }
  register(credentials) {
    this._http.post('http://localhost:3000/register', credentials)
      .subscribe((data: any) => {
        if (data.isLoggedIn) {
          this.
            _router.navigate(["login"]);
          this.$auth.next(data);
        } else {
          alert('Wrong credentials. ');
        }
      }, (err: any) => {
        console.error(err.message);
      });
  }
  logout() {
    localStorage.removeItem("token");
    this.$auth.next(this.checkLogin());
  }
  checkLogin() {
    return localStorage.getItem("token") || "";
  }


}
