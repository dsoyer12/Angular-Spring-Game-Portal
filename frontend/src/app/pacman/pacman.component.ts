import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-pacman',
  templateUrl: './pacman.component.html',
  styleUrls: ['./pacman.component.scss']
})
export class PacmanComponent implements CanActivate {

canActivate(){
     if ( localStorage.getItem("User"))  {
       console.log(localStorage.getItem("User"));
      return true; // all fine
    } else {this.router.navigate(['login']);}
  }
  constructor(private router:Router) { }

  ngOnInit() {
    this.canActivate();
  }

}
