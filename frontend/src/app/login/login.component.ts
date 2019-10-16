import { Component, OnInit } from '@angular/core';
import {CurrentUser} from '../service/http-client.service';
import {User} from '../service/http-client.service';

import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private httpClientService: HttpClientService
  ) { }

 username: any;
 password: any;
    
  
  signup(username,password){
    this.httpClientService.getSignup(this.username,this.password).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  login(username,password){
    console.log(this.username);
    console.log(this.password);

    this.httpClientService.getLogin(this.username,this.password).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    //this.User = response;
    console.log(response);
  }
  ngOnInit() {
  }

}
