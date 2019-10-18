import { Component, OnInit } from '@angular/core';
import  'src/floppy.js';
import { HttpClientService } from '../service/http-client.service';
import { CanActivate, Router } from '@angular/router';


// System.import('floppy.js'); //or below one
declare var startGame2: any;
declare var  getDead:any;

@Component({
  selector: 'app-floppybird',
  templateUrl: './floppybird.component.html',
  styleUrls: ['./floppybird.component.scss']
})
export class FloppybirdComponent implements CanActivate {
canActivate(){
     if ( localStorage.getItem("User"))  {
       console.log(localStorage.getItem("User"));
      return true; // all fine
    } else {this.router.navigate(['login']);}
  }

  constructor(private httpClientService: HttpClientService,private router: Router) { }

  ngOnInit() {
this.canActivate();
startGame2();



  }




SendScore(){
if(localStorage.getItem("FlappyScore")!=null){
  console.log("here");
  let points = localStorage.getItem("FlappyScore");
var user = JSON.parse(localStorage.getItem('User'));
      this.httpClientService.setScores(points
        ,user.user_id,2).subscribe(
        response => this.handleSuccessfulResponse(response),
    );//added inc function

}

}

 handleSuccessfulResponse(response) {

    console.log(response);

  }



}
