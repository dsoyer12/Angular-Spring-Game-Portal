import { Component } from '@angular/core';
import { HttpClientService } from '../service/http-client.service'
import { CanActivate,Router } from '@angular/router';





@Component({
  selector: 'my-board',
  templateUrl: './app-tic-tac-board.component.html',
  styleUrls:[ './app-tic-tac-board.component.scss']
})
export class BoardComponent implements CanActivate {
  xwins=0;
  ywins=0;
  canActivate(){
     if ( localStorage.getItem("User"))  {
       console.log(localStorage.getItem("User"));
      return true; // all fine
    } else {this.router.navigate(['login']);}
  }
  private cells: string[] = [];
  private turn: string = 'X';
  private gameover = false;
  private winner = null;
  
  constructor(private httpClientService: HttpClientService,private router: Router) {  }


  ngOnInit() {
    this.canActivate();
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
  }

  init() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
    this.turn = 'X';
    this.gameover = false;
    this.winner = null;
  }

  clickHandler(idx: number) {
    console.log(idx);
    if (!this.gameover) {
      console.log('sth set');
      if (this.cells[idx] === null) {
        this.cells[idx] = this.turn;
        this.checkWinner();
        this.changeTurn();
      }

    }
  }

  changeTurn() {

    if (this.turn === 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }
  }

  checkWinner() {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let line of lines) {
      if (this.cells[line[0]] === this.cells[line[1]] && this.cells[line[1]] === this.cells[line[2]] && this.cells[line[0]] !== null) {
        this.gameover = true;
        this.winner = this.cells[line[0]];
        this.winner = this.cells[line[0]];
        console.log("here "+this.winner);

        if(this.winner==='X'){
          this.xwins=1+this.xwins;
          var user = JSON.parse(localStorage.getItem('User'));
          //console.log("user id: " + user.user_id);
          

          this.httpClientService.incWin(user.user_id,3).subscribe(
            response => this.handleSuccessfulResponse(response),
          );
          
        }
        if(this.winner==='O'){
          this.ywins=1+this.ywins;
        }
        return;
      }
    }

    let occupy = 0;
    this.cells.forEach((e) => { occupy += (e !== null ? 1 : 0) });
    if (occupy === 9) {
      console.log('tie');
      this.gameover = true;
      this.winner = 'tie';
    }
  }
  handleSuccessfulResponse(response: Object): void {
     console.log(response);

     }
  }

