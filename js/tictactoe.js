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

  $('.col').click(function(){

    $(this).html(playerKey);
    row = $(this).attr('id').charAt(0);
    col = $(this).attr('id').charAt(1);

      grid[row][col] = 'X';

// Horizontal Wins

    if (grid[0][0] == 'X' && grid[0][1] == 'X' && grid [0][2] == 'X')
        {
        alert('X Wins!');
        return;
        }
    else if (grid[1][0] == 'X' && grid[1][1] == 'X' && grid [1][2] == 'X')
        {
          alert('X Wins!');
          return;
        }
    else if (grid[2][0] == 'X' && grid[2][1] == 'X' && grid [2][2] == 'X')
        {
      alert('X Wins!');
      return;
        }


// Vertical Wins

    if (grid[0][0] == 'X' && grid[1][0] == 'X' && grid [2][0] == 'X')
        {
        alert('X Wins!');
        return;
        }
    else if (grid[0][1] == 'X' && grid[1][1] == 'X' && grid [2][1] == 'X')
        {
          alert('X Wins!');
          return;
        }
    else if (grid[0][2] == 'X' && grid[1][2] == 'X' && grid [2][2] == 'X')
        {
      alert('X Wins!');
      return;
        }

// Diagonal Wins
    if (grid[0][0] == 'X' && grid[1][1] == 'X' && grid [2][2] == 'X')
        {
        alert('X Wins!');
        return;
        }
    else if (grid[0][2] == 'X' && grid[1][1] == 'X' && grid [2][0] == 'X')
        {
          alert('X Wins!');
          return;
        }

  // call AI Function

  computerMove (grid);

  });

});


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

    $('#'+ openSpot.i + openSpot.j).html(computerKey);

    grid[openSpot.i][openSpot.j] = computerKey;

    console.log(openSpot);
};

function gameOver (){


};
