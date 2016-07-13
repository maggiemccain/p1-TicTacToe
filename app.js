console.log('tictactoe');

var $resetBtn = $('#resetBtn');
var player = [];
var opp = [];
var turn = true; //cat turn
var $cards = $('.card');
var $currentPlayer = $('#currentPlayer');
// var $board = $('#wrapper');
var didIWin = [['box4', 'box5', 'box6'], ['box1', 'box2', 'box3'], ['box7', 'box8', 'box9'],
  ['box1', 'box4', 'box7'], ['box2', 'box5', 'box8'],['box3', 'box6', 'box9'],
  ['box1', 'box5', 'box9'], ['box3', 'box5', 'box7']];

function reset() {
  $('.card').removeClass('firstPlayerCat');
  $('.card').removeClass('oppDog');
  $('.playerDog').removeClass('currentPlayer');
  $('.playerCat').addClass('currentPlayer');
  turn = true;
  player = [];
  opp = [];
}

function winner(competitor) {
  var competitorString = competitor.toString();
  for (var i = 0; i < didIWin.length; i++) {
    var didIWinString = didIWin[i].toString();
    if (competitorString == didIWinString) {
      console.log ('you win');
      if(competitor == player) {
        alert('cats rule, dogs drool!');
        // reset();
      } else {
        alert('dogs rule, cats drool!');
        // reset();
      }
      };
    }
  }

function testForWin(competitor) {
  if (competitor.length >= 3) {
    winner(competitor);
  }
}

$cards.on('click', function(event){
  if (turn === true) { //add css so you know who's turn it is
    var $cardClickedId = event.target.id;
    var $cardClicked = $(event.target);
    // debugger
    $cardClicked.addClass('firstPlayerCat');
    // debugger
    player.push($cardClickedId);
    checkWinner();
    // testForWin(player);
    turn = !turn;
    setTimeout(function(){ //how would toggling make this easier?
      // var $catDiv = $('.playerCat')
      // var $dogDiv = $('.playerDog');
      $('.playerDog').addClass('currentPlayer');
      $('.playerCat').removeClass('currentPlayer');
    }, 500);
    //add images to denote opp is going
} else if (turn === false){
    var $cardClickedId = event.target.id;
    var $cardClicked = $(event.target);
    $cardClicked.addClass('oppDog');
    console.log($cardClickedId);
    opp.push($cardClickedId);
    checkWinner();
    // testForWin(opp)
    turn = true;
    setTimeout(function(){
      // var $catDiv = $('.playerCat')
      // var $dogDiv = $('.playerDog');
      $('.playerDog').removeClass('currentPlayer');
      $('.playerCat').addClass('currentPlayer');
    }, 500);
    //add graphic to denote player is going
  }
})

function checkWinner() {
    // if ($('box1') && $('box2') && $('box3').hasClass('firstPlayerCat')
    if ($('#box1').hasClass('firstPlayerCat') && $('#box2').hasClass('firstPlayerCat') && $('#box3').hasClass('firstPlayerCat')) {
      alert ('cats rule, dog drools');
      reset();
    } else if ($('#box4').hasClass('firstPlayerCat') && $('#box5').hasClass('firstPlayerCat') && $('#box6').hasClass('firstPlayerCat')) {
      alert ('cats rule, dog drools');
      reset();
    } else if ($('#box7').hasClass('firstPlayerCat') && $('#box8').hasClass('firstPlayerCat') && $('#box9').hasClass('firstPlayerCat')) {
      alert ('cats rule, dog drools');
      reset();
    } else if ($('#box1').hasClass('firstPlayerCat') && $('#box4').hasClass('firstPlayerCat') && $('#box7').hasClass('firstPlayerCat')) {
      alert ('cats rule, dog drools');
      reset();
    } else if ($('#box2').hasClass('firstPlayerCat') && $('#box5').hasClass('firstPlayerCat') && $('#box8').hasClass('firstPlayerCat')) {
      alert ('cats rule, dog drools');
      reset();
    } else if ($('#box3').hasClass('firstPlayerCat') && $('#box6').hasClass('firstPlayerCat') && $('#box9').hasClass('firstPlayerCat')) {
      alert ('cats rule, dog drools');
      reset();
    } else if ($('#box1').hasClass('firstPlayerCat') && $('#box5').hasClass('firstPlayerCat') && $('#box9').hasClass('firstPlayerCat')) {
      alert ('cats rule, dog drools');
      reset();
    } else if ($('#box3').hasClass('firstPlayerCat') && $('#box5').hasClass('firstPlayerCat') && $('#box7').hasClass('firstPlayerCat')) {
      alert ('cats rule, dog drools');
      reset();
    } else if ($('#box4').hasClass('oppDog') && $('#box5').hasClass('oppDog') && $('#box6').hasClass('oppDog')) {
      alert ('dogs rule, cats drools');
      reset();
    } else if ($('#box1').hasClass('oppDog') && $('#box2').hasClass('oppDog') && $('#box3').hasClass('oppDog')) {
      alert ('dogs rule, cats drools');
      reset();
    } else if ($('#box7').hasClass('oppDog') && $('#box8').hasClass('oppDog') && $('#box9').hasClass('oppDog')) {
      alert ('dogs rule, cats drools');
      reset();
    } else if ($('#box1').hasClass('oppDog') && $('#box4').hasClass('oppDog') && $('#box7').hasClass('oppDog')) {
      alert ('dogs rule, cats drools');
      reset();
    } else if ($('#box2').hasClass('oppDog') && $('#box5').hasClass('oppDog') && $('#box8').hasClass('oppDog')) {
      alert ('dogs rule, cats drools');
      reset();
    } else if ($('#box3').hasClass('oppDog') && $('#box6').hasClass('oppDog') && $('#box9').hasClass('oppDog')) {
      alert ('dogs rule, cats drools');
      reset();
    }  else if ($('#box1').hasClass('oppDog') && $('#box5').hasClass('oppDog') && $('#box9').hasClass('oppDog')) {
      alert ('dogs rule, cats drools');
      reset();
    } else if ($('#box3').hasClass('oppDog') && $('#box5').hasClass('oppDog') && $('#box7').hasClass('oppDog')) {
      alert ('dogs rule, cats drools');
      reset();
    }
}

$resetBtn.on('click', reset);
