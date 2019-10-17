import { Component } from '@angular/core';
import { HttpClientService } from './service/http-client.service';


@Component({
  selector: 'my-board',
  template: `<div class="ourboard">
  <div class="clearfix" >
</div>
  <div class="clearfix" >
  <my-cell *ngFor="let cell of cells | slice: 0: 3; let i = index" [value]="cell" (userClick)=clickHandler(i)></my-cell><br>
  </div>
<div class="clearfix">
   <my-cell *ngFor="let cell of cells | slice: 3: 6; let i = index" [value]="cell" (userClick)=clickHandler(i+3)></my-cell><br>
</div>
<div class="clearfix">
   <my-cell *ngFor="let cell of cells | slice: 6; let i = index" [value]="cell" (userClick)=clickHandler(i+6)></my-cell><br>
</div>
  <div *ngIf="winner">
    winner is {{winner}}
  </div></div>
  `,
  styles: [
    ` 
    .ourboard{
      
margin-left:30%;
      padding:0;
    }
    
}`
  ]
})

export class BoardComponent {
  private cells: string[] = [];
  private turn: string = 'X';
  private gameover = false;
  private winner = null;

  constructor(private httpClientService: HttpClientService) {  }


  ngOnInit() {
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
    console.log("here"+this.turn);

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
        /*if(this.winner==='X'){
          var user = JSON.parse(localStorage.getItem('User'));
          this.httpClientService.incWin(user,3);
        }*/
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
} 