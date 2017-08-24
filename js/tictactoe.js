var playerKey = 'X';
var computerKey = 'O';
var row = 0;
var col = 0;

$(document).ready(function(){

  const grid = [
    [' ', ' ',' '],
    [' ', ' ',' '],
    [' ', ' ',' ']
  ];

  newGame(grid);


  $('.col').click(function(){

    $(this).html(playerKey);
    row = $(this).attr('id').charAt(0);
    col = $(this).attr('id').charAt(1);

      if (grid[row][col] !== ' '){
        alert('Space Taken');
      }
      else {
        grid[row][col] = 'X';
      }

  var playerWin = playerMove(grid);
  var computerWin = computerMove (grid);

  //no win
  if (playerWin !== true && computerWin !== true){
    checkDraw(grid);
  }
  else if (playerWin === true){
    $('.win-feedback').addClass('win-play');
  }
  else if (computerWin === true){
    $('.lose-feedback').addClass('lose-play');
  }
  });
});

function newGame(grid) {


  $('.btn').click(function(){
    $('.col').html(' ');
    for (i = 0; i < grid.length; i++) {
      for (j = 0; j < grid.length; j++) {
        grid[i][j] = " ";
      }
    }

    $('.win-feedback').removeClass('win-play');
    $('.lose-feedback').removeClass('lose-play');
    $('.draw-feedback').removeClass('draw-play');

});

};

function checkDraw(grid){

  var emptySpaces = [];

    for (i = 0; i < grid.length; i++) {
      for (j = 0; j < grid.length; j++) {
        if (grid[i][j] == " ") {
          emptySpaces.push({i,j});
        }
        }
      }
    if (emptySpaces.length === 0){
      alert('Draw!');
      $('.draw-feedback').addClass('draw-play');
    }
};

function keepScore(computerMove,playerMove){

  var playerScore = 0;
  var computerScore = 0;

  if (computerMove === true){
    computerScore ++;
  }
  else if (playerMove) {
    playerScore ++;
  }

};

function computerMove(grid){

  var emptySpaces = [];

    for (i = 0; i < grid.length; i++) {
      for (j = 0; j < grid.length; j++) {
        if (grid[i][j] == " ") {
          emptySpaces.push({i,j});
        }
      }
    }
    var openSpot = emptySpaces[Math.floor(Math.random()* emptySpaces.length)];

    if (openSpot === undefined) {
      return;
    }

    $('#'+ openSpot.i + openSpot.j).html(computerKey);

    grid[openSpot.i][openSpot.j] = computerKey;

    console.log(openSpot);


    // Horizontal Wins

        if (grid[0][0] == 'O' && grid[0][1] == 'O' && grid [0][2] == 'O')
            {
            alert('0 Wins!');
            return true;
            }

        else if (grid[1][0] == 'O' && grid[1][1] == 'O' && grid [1][2] == 'O')
                {
                  alert('O Wins!');
                  return true;
                }

        else if (grid[2][0] == 'O' && grid[2][1] == 'O' && grid [2][2] == 'O')
            {
            alert('O Wins!');
            return true;
            }

    // Vertical Wins

        else if (grid[0][0] == 'O' && grid[1][0] == 'O' && grid [2][0] == 'O')
            {
              alert('O Wins!');
              return  true;
            }

        else if (grid[0][1] == 'O' && grid[1][1] == 'O' && grid [2][1] == 'O')
            {
              alert('O Wins!');
              return true;
            }

        else if (grid[0][2] == 'O' && grid[1][2] == 'O' && grid [2][2] == 'O')
            {
              alert('O Wins!');
              return true;
            }

    // Diagonal Wins


       if (grid[0][0] == 'O' && grid[1][1] == 'O' && grid [2][2] == 'O')
            {
              alert('O Wins!');
              return true;
            }

        else if (grid[0][2] == 'O' && grid[1][1] == 'O' && grid [2][0] == 'O')
            {
              alert('O Wins!');
              return true;
            }

};


function playerMove(grid){

  // Horizontal Wins

      if (grid[0][0] == 'X' && grid[0][1] == 'X' && grid [0][2] == 'X')
          {
          alert('X Wins!');

          return true;
          }

      else if (grid[1][0] == 'X' && grid[1][1] == 'X' && grid [1][2] == 'X')
          {
            alert('X Wins!');

            return true;
          }

      else if (grid[2][0] == 'X' && grid[2][1] == 'X' && grid [2][2] == 'X')
          {
        alert('X Wins!');
        return true;
          }


  // Vertical Wins

      else if (grid[0][0] == 'X' && grid[1][0] == 'X' && grid [2][0] == 'X')
          {
          alert('X Wins!');

          return true;
          }

      else if (grid[0][1] == 'X' && grid[1][1] == 'X' && grid [2][1] == 'X')
          {
            alert('X Wins!');

            return true;
          }
      else if (grid[0][2] == 'X' && grid[1][2] == 'X' && grid [2][2] == 'X')
          {
        alert('X Wins!');

        return true;
          }


  // Diagonal Wins
    else if (grid[0][0] == 'X' && grid[1][1] == 'X' && grid [2][2] == 'X')
          {
          alert('X Wins!');

          return true;
          }
      else if (grid[0][2] == 'X' && grid[1][1] == 'X' && grid [2][0] == 'X')
          {
            alert('X Wins!');

            return true;
          }

};
