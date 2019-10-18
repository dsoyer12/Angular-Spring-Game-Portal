import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  Scores: any[];
  MyGame1: any[]=[];//score
  MyGame2: any[]=[];//score
  MyGame3: any[]=[];//wins
  MyGame4: any[]=[];//wins
  MyGame5: any[]=[];//wins
  //135
  scoredGameIds: number[]=[2,4]
  winGamesIds: number[]=[1,3,5]
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.loadgames();
    this.loadgames1();
  }
  loadgames1(){
    for (var val of this.winGamesIds){
      this.httpClientService.getTopTenWins(val).subscribe(
        response => this.handleSuccessfulResponse(response),
      );
    }
  }
  loadgames(){
    for (var val of this.scoredGameIds){
      this.httpClientService.getTopTenScores(val).subscribe(
        response => this.handleSuccessfulResponse(response),
      );
    }
  }

  handleSuccessfulResponse(response) {
    //This is an unfinished implementation of attempting to post only a users scores
    //to the score table generated on login
    this.Scores = response;
    console.log(response);
    for (let i = 0; i < 10; i++) {
      //console.log(localStorage.getItem("User"));
      //console.log(this.Scores[i].user.user_id);
      //if (this.Scores[i].user.user_id == localStorage.getItem("User")) {
        //console.log(this.Scores[i]);
      /*console.log("Username is: " +this.Scores[i].user.username);
      console.log("Game "+this.Scores[i].game.description);
      console.log(this.Scores[i])
      console.log("Score is "+this.Scores[i].scores);
      console.log("SPACE");*/
      if(this.Scores[i].game.id==2){
        this.MyGame1.push(this.Scores[i]);
      }
      if(this.Scores[i].game.id==4){
        this.MyGame2.push(this.Scores[i]);

      }
      if(this.Scores[i].game.id==1){
        this.MyGame3.push(this.Scores[i]);

      }
      if(this.Scores[i].game.id==3){
        this.MyGame4.push(this.Scores[i]);

      }
      if(this.Scores[i].game.id==5){
        this.MyGame5.push(this.Scores[i]);

      }

    }

  }

}
