import { Component, OnInit } from '@angular/core';
//import {User} from '../service/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }


    username: string = "Hi";
    password: string = "Bye";
    id: 0;
  

  login(){
    console.log(this.username);
    console.log(this.password);
  }
  ngOnInit() {
  }

}
