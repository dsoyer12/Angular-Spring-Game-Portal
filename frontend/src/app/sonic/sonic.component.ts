import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-sonic',
  templateUrl: './sonic.component.html',
  styleUrls: ['./sonic.component.scss']
})
export class SonicComponent implements CanActivate {
canActivate(){
     if ( localStorage.getItem("User"))  {
       console.log(localStorage.getItem("User"));
      return true; // all fine
    } else {this.router.navigate(['login']);}
  }

  constructor(private httpClientService: HttpClientService,private router: Router) { }

  ngOnInit() {
    this.canActivate();
  }

}
