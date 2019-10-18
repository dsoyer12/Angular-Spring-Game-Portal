import { Component, OnInit } from '@angular/core';

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
  }

}
