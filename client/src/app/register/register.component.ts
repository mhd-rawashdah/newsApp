import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data:Object= {
    fullName:'',
    email: '',
    password: ''
  }
  constructor(private Auth: AuthService ) {}


  // Function to get data from DataFeild
  getDataFeild(e:any):void {
    //
    e.preventDefault();
    this.data[e.target.id] = e.target.value;
  }

  // function to register and call register function from auth services
  onClick(e:any):void{
    e.preventDefault();
    this.Auth.register(this.data);
  }

}
