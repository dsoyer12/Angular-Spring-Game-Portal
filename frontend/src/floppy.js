var myGamePiece;
var myObstacles = [];
var myScore;
var dead = 'false';

function startGame2() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");



}





// creating game canvas to hold entities
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 720;
        this.canvas.height = 360;
        this.context = this.canvas.getContext("2d");
        document.getElementById("game").appendChild(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        // event listeners for pressing key down and release up.
        window.addEventListener('keydown', function(e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function(e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
    },
    clear: function() { // clear canvas.
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() { //stop counting frames
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        let ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;
        }
        // crash with allows physics logic, setting up spike borders
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (let i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            console.log("dead");
            localStorage.setItem('FlappyScore', myGameArea.frameNo);
            console.log(localStorage.getItem('FlappyScore'));

            return;
        }
    }
    myGameArea.clear();

    // allow player to use arrow keys for movement.
    // adjust speed here.
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[37]) { myGamePiece.speedX = -3; } else if (myGameArea.keys && myGameArea.keys[39]) { myGamePiece.speedX = 3; } else if (myGameArea.keys && myGameArea.keys[38]) { myGamePiece.speedY = -5; } else if (myGameArea.keys && myGameArea.keys[40]) { myGamePiece.speedY = 3; } else { myGamePiece.speedY = 3; }

    // Randomize spikes spawn
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new component(10, height, "black", x, 0));
        myObstacles.push(new component(10, x - height - gap, "red", x, height + gap));
    }
    for (let i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].speedX = -1;
        myObstacles[i].newPos();
        myObstacles[i].update();
    }
    // Score updates for every frame.
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

//counting frames for every interval.
function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) { return true; }
    return false;
}