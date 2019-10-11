var myGamePiece;
var myGamePiece2
    // driver function to initialize game components
function startGame() {
    myGameArea.start();
    myGamePiece = new component(20, 90, "black", 1, 50);
    myGamePiece2 = new component(20, 90, "red", 350, 1);
}
// creating game canvas to hold entities
var myGameArea = {

        canvas: document.createElement("canvas"),
        start: function() {
            var insert = document.getElementById("mygame");
            this.canvas.width = 480;
            this.canvas.height = 270;
            this.context = this.canvas.getContext("2d");
            insert.insertBefore(this.canvas, insert.childNodes[0]);
            this.interval = setInterval(updateGameArea, 20);
            window.addEventListener('keydown', function(e) {
                myGameArea.keys = (myGameArea.keys || []);
                myGameArea.keys[e.keyCode] = (e.type == "keydown");
            })
            window.addEventListener('keyup', function(e) {
                myGameArea.keys[e.keyCode] = (e.type == "keydown");
            })
        },
        clear: function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    // creating components for the game
function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        let ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}
// updating entities in the canvas
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[37]) {
        myGamePiece.speedX = -5;
    }
    if (myGameArea.keys && myGameArea.keys[39]) {
        myGamePiece.speedX = 5;
    }
    if (myGameArea.keys && myGameArea.keys[38]) {
        myGamePiece.speedY = -5;
    }
    if (myGameArea.keys && myGameArea.keys[40]) {
        myGamePiece.speedY = 5;
    }
    myGamePiece.newPos();
    myGamePiece2.newPos();
    myGamePiece.update();
    myGamePiece2.update();
}