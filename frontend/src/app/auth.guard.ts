import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    // add the service we need
  constructor(

    private router: Router
  ) {}


  canActivate():boolean{

if(!this.OnAuth()){
  console.log("here");
this.router.navigate(['login']);
        return false;

  }return true;
  }
  OnAuth() {
    if(localStorage.getItem===null){return false;}
    return true;
  }


}
