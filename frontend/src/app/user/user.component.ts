import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements CanActivate {
  canActivate(){
     if ( localStorage.getItem("User"))  {
       console.log(localStorage.getItem("User"));
      return true; // all fine
    } else {this.router.navigate(['login']);}
  }


  Users: any[];

  constructor(
    private httpClientService: HttpClientService, private router:Router
  ) { }

  ngOnInit() {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.Users = response;
  }

}

