import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export class User{
  constructor(
    public user_id:number,
    public username:string,
    public password:string,

  ) {}
}
export class CurrentUser{
  constructor(
    public user_id:number,
    public username:string,
    public password:string,

  ) {}
}

export class Score{
  constructor(
    public id:number,
    public scores:number,
    public user:[],
    public game:[],


  ) {}
}



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) {
     }

     getUsers()
  {
    console.log("test call");
    console.log(this.httpClient.get<User[]>('http://localhost:8082/P2/user/all'));
    return this.httpClient.get<User[]>('http://localhost:8082/P2/user/all');
  }

  getLogin(username, password){
    let params =new HttpParams();
    params = params.append('user_id','-1');
    console.log(username);
    params = params.append('username',username);
    params = params.append('password',password);
    
    return this.httpClient.get('http://localhost:8082/P2/user/login',{params:params});

  }
  getSingup(username, password){
    let params =new HttpParams();
    params = params.append('user_id','-1');
    console.log(username);
    params = params.append('username',username);
    params = params.append('password',password);
    
    return this.httpClient.get('http://localhost:8082/P2/user/signup',{params:params});

  }
  getScores()
  {
    console.log("test call");
    return this.httpClient.get<Score[]>('http://localhost:8082/P2/score/all');
  }
}
