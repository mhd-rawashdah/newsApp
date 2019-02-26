import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  data:Object = {
    email: '',
    password: ''
  }
  constructor( private Auth: AuthService) { }

  ngOnInit() {
  }
  getDataFeild(e:any):void {
    e.preventDefault();
    this.data[e.target.id] = e.target.value;
    console.log(this.data)
  }

  onClick(e:any):void{
    e.preventDefault();
    this.Auth.login(this.data);
  }
}
