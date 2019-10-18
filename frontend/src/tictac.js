
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  
  let currentPlayer = 'X';
  
  function move(row, col) {
    if (board[row][col] === '') {
      board[row][col] = currentPlayer;
      if (currentPlayer=='X'){
        currentPlayer='O';
      }else currentPlayer='X';
      return getWinner(board);  }
  }
  
  function sameContains(array) {
    return array.every(x => array[0] === x && x !== '');
  }
  
  function getWinner(board) {
    const winningPositions = [
      // rows
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // cols
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // diagonals
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];
    
    const valuesAtWinningPositions = winningPositions.map(
      pos => pos.map(cellPos => board[cellPos[1]][cellPos[0]]));
    
    const winningRow = valuesAtWinningPositions.find(sameContains);
    const winner = winningRow ? winningRow[0] : null;
    const isTie = !winner && board.flat().every(cell => cell != '');
    return isTie ? 'Nobody' : winner;
  }
  
  
  // *** Player***
  
  const rows = board.length;
  const cols = board[0].length;
  const boardize = 130;
  
  function setup() {
    createCanvas(cols * boardize, rows * boardize);
  }
  
  function mouseClicked() {
    if(mouseY < height && mouseX < width) {
      const winner = move(floor(mouseY / boardize), floor(mouseX / boardize));
      if(winner) {
        noLoop();
        let resultP = '';
      resultP.style('font-size', '32pt');
        resultP.html(`${winner} wins!`);
      
        console.log(winner + ' wins!');
      }
    }
  }
  
  
  
  function draw() {
    background(220,0,220);
    drawboard(board, rows, cols, boardize);
    drawGrid(rows, cols, boardize);
  }
  
  function drawboard(board, rows, cols, boardize) {
    for (let row = 0; row < rows; row++)
      for (let col = 0; col < cols; col++)
        drawCell(board[row][col], row, col, boardize);
  }
  
  function drawGrid(rows, cols, size) {
    
    strokeWeight(5);
    for (let row = 1; row < rows; row++)
      
      line(30, row * size, cols * size -30, row * size);
    for (let col = 1; col < cols; col++)
      line(col * size, 30, col * size, rows * size-30);
  }
  
  function drawCell(cell, row, col, width) {
    textSize(width * 0.75);
    textAlign(CENTER, CENTER);
    text(cell, col * width + width / 2, row * width + width / 2);
  }
  