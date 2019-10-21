import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

   constructor(
    private httpClientService: HttpClientService, private router: Router
  ) { }

 username: any;
 password: any;
 notLoggedIn;
  ngOnInit() {
this.checkLogin();


  }
checkLogin(){
if (localStorage.getItem("User") === null){
  this.notLoggedIn = true;
} else {
this.notLoggedIn = false;

}



}


signup(username,password){
  console.log(this.username);
  console.log(this.password);
    this.httpClientService.getSignup(this.username,this.password).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    this.router.navigate(['login']);
  }
  handleSuccessfulResponse(response) {

     console.log(response);


}}
