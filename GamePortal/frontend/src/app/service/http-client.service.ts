import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User{
  constructor(
    public USER_ID:number,
    public USERNAME:string,
    public PASSWORD:string,

  ) {}
}

export class Score{
  constructor(
    public Score_ID:number,
    public Scores:number,
    public Game_ID:number,
    public User_ID:number,


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
    return this.httpClient.get<User[]>('http://localhost:8080/User');
  }

  getScores()
  {
    console.log("test call");
    return this.httpClient.get<Score[]>('http://localhost:8080/Scores');
  }
}
