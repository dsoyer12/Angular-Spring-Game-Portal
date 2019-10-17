export class game2{

  constructor(
    ){}

  static StartGame() {
    var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.requestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60) // method tells the browser that you wish to perform an animation and requests that the browser call
    }; //a specified function to update an animation before the next repaint.
    var canvas = document.createElement("canvas"); //create canvas
    var width = 400;
    var height = 600;
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    var player = new Player();
    var computer = new Computer();
    var ball = new Ball(200, 300);
    var myScore = new Score("WINS:", 25, 10, 250, 250);
    var ScoreVal =new Score(score, 60, 10, 250, 250);
    var score = 0;
    var deathscore = 0;
    var keysDown = {};

    // render method
    var render = function() {
        context.fillStyle = "#00FDFF";
        context.fillRect(0, 0, width, height);
        player.render();
        computer.render();
        ball.render();
        myScore.text =
            myScore.render();
            ScoreVal.render();
    };

    // update entities here
    var update = function() {
      computer.update(ball);
      ball.update(player.paddle, computer.paddle);

    };

    //First it will update all of our objects. Next it will render those objects. "Driver method"
    var step = function() {
      if(score<5 && deathscore<5){ player.update();
        update();
        render();
        animate(step); // use animate to recall step
      }
      else  if (deathscore >= 5){var GameOver = new Score("GAME OVER", 60, 300, 250, 250);
    GameOver.render();}
      else  if (score >= 5){var Win = new Score("YOU WIN", 60, 300, 250, 250); Win.render();
      var user = JSON.parse(localStorage.getItem('User'));
      this.httpClientService.setScores(user.user_id,1).subscribe(
        response => this.handleSuccessfulResponse(response),
    );//added inc function
    }
              // myScore.update();


    };

    //create score
    function Score(width, height, x, y, type) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.type = type;
    }

    Score.prototype.render = function() {
        context.fillStyle = "#000000";
        context.fillText(this.width, this.height, this.x, this.y);
    };

    // create paddle
    function Paddle(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.x_speed = 0;
        this.y_speed = 0;
    }

    Paddle.prototype.render = function() {
        context.fillStyle = "#FF00FE";
        context.fillRect(this.x, this.y, this.width, this.height);
    };

    Paddle.prototype.move = function(x, y) {
        this.x += x;
        this.y += y;
        this.x_speed = x;
        this.y_speed = y;
        if (this.x < 0) {
            this.x = 0;
            this.x_speed = 0;
        } else if (this.x + this.width > 400) {
            this.x = 400 - this.width;
            this.x_speed = 0;
        }
    };

    // create AI to play with
    function Computer() {
        this.paddle = new Paddle(175, 10, 50, 10);
    }

    Computer.prototype.render = function() {
        this.paddle.render();
    };

    Computer.prototype.update = function(ball) {
        var x_pos = ball.x;
        var diff = -((this.paddle.x + (this.paddle.width / 2)) - x_pos); // find distance between ai and ball
        if (diff < 0 && diff < -4) {
            diff = -5;
        } else if (diff > 0 && diff > 4) {
            diff = 5;
        }
        this.paddle.move(diff, 0);
        if (this.paddle.x < 0) {
            this.paddle.x = 0;
        } else if (this.paddle.x + this.paddle.width > 400) {
            this.paddle.x = 400 - this.paddle.width;
        }
    };

    function Player() {
        this.paddle = new Paddle(175, 580, 50, 10);
    }

    Player.prototype.render = function() {
        this.paddle.render();
    };

    Player.prototype.update = function() {
        for (var key in keysDown) {
            var value = Number(key);
            if (value == 37) {
                this.paddle.move(-8, 0);
            } else if (value == 39) {
                this.paddle.move(8, 0);
            } else {
                this.paddle.move(0, 0);
            }
        }
    };

    //create ball
    function Ball(x, y) {
        this.x = x;
        this.y = y;
        this.x_speed = 0;
        this.y_speed = 3;
    }

    Ball.prototype.render = function() {
        context.beginPath();
        context.arc(this.x, this.y, 5, 2 * Math.PI,10*Math.PI);
        context.fillStyle = "#FF7B00";
        context.fill();
    };

    Ball.prototype.update = function(paddle1, paddle2) {
        this.x += this.x_speed;
        this.y += this.y_speed;
        var top_x = this.x - 5;
        var top_y = this.y - 5;
        var bottom_x = this.x + 5;
        var bottom_y = this.y + 5;

        if (this.x - 5 < 0) {
            this.x = 5;

            this.x_speed = -this.x_speed;
        } else if (this.x + 5 > 400) {
            this.x = 395;

            this.x_speed = -this.x_speed;
        }
        if (this.y < 0 ) {
          this.x_speed = 0;
          this.y_speed = 3;
          this.x = 200;
          this.y = 300;
          score +=1;
          console.log(score);
      }
        if ( this.y > 600) {
            this.x_speed = 0;
            this.y_speed = 3;
            this.x = 200;
            this.y = 300;
            deathscore +=1;
            console.log(deathscore);
        }

        if (top_y > 300) {
            if (top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
                this.y_speed = -3;
                this.x_speed += (paddle1.x_speed / 2);
                this.y += this.y_speed;
            }
        } else {
            if (top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y && top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x) {
                this.y_speed = 3;
                this.x_speed += (paddle2.x_speed / 2);
                this.y += this.y_speed;


            }
        }
    };

    // append child node to canvas then animate calling step method
    document.getElementById("pang").appendChild(canvas);

    animate(step);

    //event listener to listen for key down and key press
    window.addEventListener("keydown", function(event) {
        keysDown[event.keyCode] = true;
    });

    window.addEventListener("keyup", function(event) {
        delete keysDown[event.keyCode];
    });
};
}
