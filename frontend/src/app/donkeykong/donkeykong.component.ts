import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-donkeykong',
  templateUrl: './donkeykong.component.html',
  styleUrls: ['./donkeykong.component.scss']
})
export class DonkeykongComponent implements CanActivate {
canActivate(){
     if ( localStorage.getItem("User"))  {
       console.log(localStorage.getItem("User"));
      return true; // all fine
    } else {this.router.navigate(['login']);}
  }

  constructor(private httpClientService: HttpClientService,private router: Router) { }
  ngOnInit() {
  }

}
