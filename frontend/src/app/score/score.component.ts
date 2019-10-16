import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  Scores:any [];
  MyScores:any[];
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getScores().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

handleSuccessfulResponse(response)
{
  //This is an unfinished implementation of attempting to post only a users scores
  //to the score table generated on login
    this.Scores=response;
    for(let i = 0; i < this.Scores.length;i++){
      console.log(localStorage.getItem("user_id"));
      console.log(this.Scores[i].user.user_id);
if (this.Scores[i].user.user_id == localStorage.getItem("user_id")){
  console.log(this.Scores[i].user.user_id);

  this.MyScores.push(this.Scores[i]);
}

    }

}

}

