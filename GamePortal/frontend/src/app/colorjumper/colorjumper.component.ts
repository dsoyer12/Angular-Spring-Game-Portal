import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-colorjumper',
  templateUrl: './colorjumper.component.html',
  styleUrls: ['./colorjumper.component.scss']
})
export class ColorjumperComponent implements OnInit {

  constructor() { }
  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }
  ngOnInit() {this.createCanvas();
  }
private p5;


  private sketch(p: any) {
    var isGameOver;
var score;

var GRAVITY = 0.3;
var JUMP = -5;

var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var numGroundSprites;

var player;

var obstacleSprites;


     p.setup =() => {
      isGameOver = false;
      score = 0;

      p.createCanvas(400, 300);
      p.background(150, 200, 250);
      let groundSprites = new p.Group();

      numGroundSprites = p.width / GROUND_SPRITE_WIDTH + 1;

      for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = p.createSprite(n * 50, p.height - 25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
      }


    }
    p.draw = () => {
      player = p5.createSprite(100, p5.height - 75, 50, 50);

      obstacleSprites = new p5.Group();
      if (isGameOver) {
        p5.background(0);
        p5.fill(255);
        p5.textAlign(p5.CENTER);
        p5.text("Your score was: " + score, p5.camera.position.x, p5.camera.position.y - 20);
        p5.text("Game Over! Click anywhere to restart", p5.camera.position.x, p5.camera.position.y);
      } else {
        p5.background(150, 200, 250);

        player.velocity.y = player.velocity.y + GRAVITY;

        if (groundSprites.overlap(player)) {
          player.velocity.y = 0;
          player.position.y = (p5.height - 50) - (player.height / 2);
        }

        if (p5.keyDown(p5.UP_ARROW)) {
          player.velocity.y = JUMP;
        }

        player.position.x = player.position.x + 5;
        p.camera.position.x = player.position.x + (p.width / 4);

        var firstGroundSprite = groundSprites[0];
        if (firstGroundSprite.position.x <= p5.camera.position.x - (p5.width / 2 + firstGroundSprite.width / 2)) {
          groundSprites.remove(firstGroundSprite);
          firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites * firstGroundSprite.width;
          groundSprites.add(firstGroundSprite);
        }

        if (p.random() > 0.95) {
          var obstacle = p5.createSprite(p5.camera.position.x + p5.width, p5.random(0, (p5.height - 50) - 15), 30, 30);
          obstacleSprites.add(obstacle);
        }

        var firstObstacle = obstacleSprites[0];
        if (obstacleSprites.length > 0 && firstObstacle.position.x <= p.camera.position.x - (p5.width / 2 + firstObstacle.width / 2)) {
          p5.removeSprite(firstObstacle);
        }

        obstacleSprites.overlap(player, p5.endGame);

        p5.drawSprites();

        score = score + 1;
        p.textAlign(p.CENTER);
        p.text(score, p.camera.position.x, 10);
      }
       const endGame = () => {
         isGameOver = true;
      }

      p5.mouseClicked=()=> {
        if (isGameOver) {

          for (var n = 0; n < numGroundSprites; n++) {
            var groundSprite = groundSprites[n];
            groundSprite.position.x = n * 50;
          }

          player.position.x = 100;
          player.position.y = p5.height - 75;

          obstacleSprites.removeSprites();

          score = 0;
          isGameOver = false;
        }
      }
    }
    }







}


