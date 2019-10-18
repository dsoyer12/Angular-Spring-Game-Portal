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
  getSignup(username, password){
    //signup function
    let params3 =new HttpParams();
    params3 = params3.append('user_id','-1');
    console.log(username);
    params3 = params3.append('username',username);
    params3 = params3.append('password',password);

    return this.httpClient.get('http://localhost:8082/P2/user',{params:params3});}

  setScores(points,user_id,game_id){
    let params2 =new HttpParams();
    console.log(user_id);
    params2 = params2.append('scores',points);
    console.log(game_id);
    params2 = params2.append('user_id',user_id);
    console.log(points);
    params2 = params2.append('id',game_id);
    return this.httpClient.get('http://localhost:8082/P2/score/add',{params:params2});
  }

  incWin(user_id,game_id){
    let params3 =new HttpParams();
    console.log(user_id);
    console.log(game_id);
    params3 = params3.append('user_id',user_id);
    params3 = params3.append('id',game_id);
​
    return this.httpClient.get('http://localhost:8082/P2/score/add',{params:params3});
​
  }


  getScores()
  {
    console.log("test call");
    return this.httpClient.get<Score[]>('http://localhost:8082/P2/score/all');
  }
}
