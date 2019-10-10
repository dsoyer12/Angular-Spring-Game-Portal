import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User{
  constructor(
    public USER_ID:number,
    public USERNAME:string,
    public PASSWORD:string,

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

     getUser()
  {
    console.log("test call");
    return this.httpClient.get<Users[]>('http://localhost:8080/User');
  }
}
