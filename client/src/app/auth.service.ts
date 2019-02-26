import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  // services to register
  register(user: Object):any {
    console.log(user);
    this.http.post('http://localhost:5000/register', user).subscribe( res => {
      console.log(res);
      if(res['success']) {
        this.router.navigate(['feed']);
      }
    })
  }

  // service to login
  login(user: Object): any {
    console.log(user);
  }
}
