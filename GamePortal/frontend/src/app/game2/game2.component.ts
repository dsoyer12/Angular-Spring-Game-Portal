import { Component, OnInit } from '@angular/core';
// System.import('game2.js'); //or below one
import  'src/game2.js';
declare var startGame:any;

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.scss'],

})
export class Game2Component implements OnInit {

  constructor() { }

  ngOnInit() {





  }
  show = false;
  showing = true;
genGame(){


}
  toggleDiv(){

   this.show = !this.show;

startGame();

  }


}
