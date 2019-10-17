import { Component, OnInit } from '@angular/core';
import { game2 } from 'src/game2';
import { CanActivate, Router } from '@angular/router';




@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.scss'],

})
export class Game2Component implements CanActivate {
  canActivate(){
     if ( localStorage.getItem("User"))  {
       console.log(localStorage.getItem("User"));
      return true; // all fine
    } else {this.router.navigate(['login']);}
  }

  constructor(private router: Router) { }

  ngOnInit() {

   if(localStorage.getItem("User")===null){

    this.router.navigate(['login']);
   }
   game2.StartGame();



  }

genGame(){


}



}
