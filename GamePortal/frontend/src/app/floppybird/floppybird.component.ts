import { Component, OnInit } from '@angular/core';
import  'src/floppy.js';

// System.import('floppy.js'); //or below one
declare var startGame2: any;

@Component({
  selector: 'app-floppybird',
  templateUrl: './floppybird.component.html',
  styleUrls: ['./floppybird.component.scss']
})
export class FloppybirdComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }



  show2 = false;
  showing2 = true;
genGame(){


}
  toggleDiv2(){

   this.show2 = !this.show2;

   startGame2();

  }



}
