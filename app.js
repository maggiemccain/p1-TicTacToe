console.log('tictactoe');
//object of ways to win
// var waysToWin = {
//   row1 : ['box1', 'box2', 'box3'],
//   row2 : ['box4', 'box5', 'box6'],
//   row3 : ['box7', 'box8', 'box9'],
//   column1 : ['box1', 'box4', 'box7'],
//   column2 : ['box2', 'box5', 'box8'],
//   column3 : ['box3', 'box6', 'box9'],
//   diagonal1 : ['box1', 'box5', 'box9'],
//   diagonal2 : ['box3', 'box5', 'box7'],
// }
var column2 = ['box2', 'box5', 'box8'];
//try to make it 2 players
var player1 = true;
var opp2;
//if player 1 is true, its their turn and an X on click, then chang eit to x false
var player = [];
var opp = [];
var turn = true;

var $cards = $('.card');
var $board = $('#wrapper');

$cards.on('click', function(event){
  var $cardClickedId = event.target.id;
  var $cardClicked = $(event.target);
  // debugger
  $cardClicked.append("<img id='xImg' src='images/ximg.png'>");//not working
  console.log($cardClickedId);
  player.push($cardClickedId);
});

var didIWin = [['box4', 'box5', 'box6'], ['box1', 'box2', 'box3'], ['box7', 'box8', 'box9']];
function winner(player) {
  var playerString = player.toString();
  for (var i = 0; i < didIWin.length; i++) {
    var didIWinString = didIWin[i].toString();
    if (playerString == didIWinString) {
      console.log ('you win');}
    }
  } winner(player);
