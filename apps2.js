var $resetBtn = $('#resetBtn');
var turn = true; //cat turn
var $cards = $('.card');
var $currentPlayer = $('#currentPlayer');
var scoreCat = 0;
var scoreDog = 0;
var $catScoreboard = $('#catNum');
var $dogScoreboard = $('#dogNum');
var $catWin = $('#catWin');
var $dogWin = $('#dogWin');
var $gameboard = $('#gameboard');
var $tie = $('#tie');

function reset() {
  $('.card').removeClass('firstPlayerCat');
  $('.card').removeClass('oppDog');
  $('.playerDog').removeClass('currentPlayer');
  $('.playerCat').addClass('currentPlayer');
  turn = true;
}

function catWinMsg() {
  setTimeout(function() {
    $catWin.show();
    updateCatScore();
    $gameboard.hide();
  }, 500);
  setTimeout(function() {
    $catWin.hide();
    $gameboard.show();
  }, 2000);
}

function dogWinMsg() {
  setTimeout(function() {
    $dogWin.show();
    updateDogScore();
    $gameboard.hide();
  }, 500);
  setTimeout(function() {
    $dogWin.hide();
    $gameboard.show();
  }, 2000);
}

function tieMsg() {
  setTimeout(function() {
    $tie.show();
    $gameboard.hide();
  }, 100);
  setTimeout(function() {
    $tie.hide();
    $gameboard.show();
  }, 2000);
}

function updateCatScore() {
  $catScoreboard.html(scoreCat+=1);
  reset();
}

function updateDogScore() {
  $dogScoreboard.html(scoreDog+=1);
  reset();
}

$('.playerCat').addClass('currentPlayer');

$cards.on('click', function(event){
  if (turn === true) {
    var $cardClickedId = event.target.id;
    var $cardClicked = $(event.target);
    $cardClicked.addClass('firstPlayerCat');
    checkWinner();
    turn = !turn;
    setTimeout(function(){
      $('.playerDog').addClass('currentPlayer');
      $('.playerCat').removeClass('currentPlayer');
    }, 100);
  } else if (turn === false){
      var $cardClickedId = event.target.id;
      var $cardClicked = $(event.target);
      $cardClicked.addClass('oppDog');
      checkWinner();
      turn = true;
      setTimeout(function(){
        $('.playerDog').removeClass('currentPlayer');
        $('.playerCat').addClass('currentPlayer');
      }, 100);
  }
})

function checkWinner() {
  if ($('#box1').hasClass('firstPlayerCat') && $('#box2').hasClass('firstPlayerCat') && $('#box3').hasClass('firstPlayerCat')) {
    catWinMsg();
  } else if ($('#box4').hasClass('firstPlayerCat') && $('#box5').hasClass('firstPlayerCat') && $('#box6').hasClass('firstPlayerCat')) {
      catWinMsg();
  } else if ($('#box7').hasClass('firstPlayerCat') && $('#box8').hasClass('firstPlayerCat') && $('#box9').hasClass('firstPlayerCat')) {
      catWinMsg();
  } else if ($('#box1').hasClass('firstPlayerCat') && $('#box4').hasClass('firstPlayerCat') && $('#box7').hasClass('firstPlayerCat')) {
      catWinMsg();
  } else if ($('#box2').hasClass('firstPlayerCat') && $('#box5').hasClass('firstPlayerCat') && $('#box8').hasClass('firstPlayerCat')) {
      catWinMsg();
  } else if ($('#box3').hasClass('firstPlayerCat') && $('#box6').hasClass('firstPlayerCat') && $('#box9').hasClass('firstPlayerCat')) {
      catWinMsg();
  } else if ($('#box1').hasClass('firstPlayerCat') && $('#box5').hasClass('firstPlayerCat') && $('#box9').hasClass('firstPlayerCat')) {
      catWinMsg();
  } else if ($('#box3').hasClass('firstPlayerCat') && $('#box5').hasClass('firstPlayerCat') && $('#box7').hasClass('firstPlayerCat')) {
      catWinMsg();
  } else if ($('#box4').hasClass('oppDog') && $('#box5').hasClass('oppDog') && $('#box6').hasClass('oppDog')) {
      dogWinMsg();
  } else if ($('#box1').hasClass('oppDog') && $('#box2').hasClass('oppDog') && $('#box3').hasClass('oppDog')) {
      dogWinMsg()
  } else if ($('#box7').hasClass('oppDog') && $('#box8').hasClass('oppDog') && $('#box9').hasClass('oppDog')) {
      dogWinMsg()
  } else if ($('#box1').hasClass('oppDog') && $('#box4').hasClass('oppDog') && $('#box7').hasClass('oppDog')) {
      dogWinMsg()
  } else if ($('#box2').hasClass('oppDog') && $('#box5').hasClass('oppDog') && $('#box8').hasClass('oppDog')) {
      dogWinMsg()
  } else if ($('#box3').hasClass('oppDog') && $('#box6').hasClass('oppDog') && $('#box9').hasClass('oppDog')) {
      dogWinMsg()
  }  else if ($('#box1').hasClass('oppDog') && $('#box5').hasClass('oppDog') && $('#box9').hasClass('oppDog')) {
      dogWinMsg()
  } else if ($('#box3').hasClass('oppDog') && $('#box5').hasClass('oppDog') && $('#box7').hasClass('oppDog')) {
      dogWinMsg()
  } else if ($('.firstPlayerCat').length + $('.oppDog').length === 9) {
      tieMsg();
      setTimeout(reset, 2000);
  }
}

$resetBtn.on('click', reset);
