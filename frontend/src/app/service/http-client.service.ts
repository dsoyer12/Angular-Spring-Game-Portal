import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User{
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

  getScores()
  {
    console.log("test call");
    return this.httpClient.get<Score[]>('http://localhost:8082/P2/score/all');
  }
}
