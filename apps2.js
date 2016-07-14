var $resetBtn = $('#resetBtn');
var turn = true; //cat turn
var $cards = $('.card');
var $currentPlayer = $('#currentPlayer');
var scoreCat = 0;
var scoreDog = 0;
var $catScoreboard = $('#catNum');
var $dogScoreboard = $('#dogNum');

function reset() {
  $('.card').removeClass('firstPlayerCat');
  $('.card').removeClass('oppDog');
  $('.playerDog').removeClass('currentPlayer');
  $('.playerCat').addClass('currentPlayer');
  turn = true;
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
      alert ('cats rule, dog drools');
      updateCatScore();
    } else if ($('#box4').hasClass('firstPlayerCat') && $('#box5').hasClass('firstPlayerCat') && $('#box6').hasClass('firstPlayerCat')) {
        alert ('cats rule, dog drools');
        updateCatScore();
    } else if ($('#box7').hasClass('firstPlayerCat') && $('#box8').hasClass('firstPlayerCat') && $('#box9').hasClass('firstPlayerCat')) {
        alert ('cats rule, dog drools');
        updateCatScore();
    } else if ($('#box1').hasClass('firstPlayerCat') && $('#box4').hasClass('firstPlayerCat') && $('#box7').hasClass('firstPlayerCat')) {
        alert ('cats rule, dog drools');
        updateCatScore();
    } else if ($('#box2').hasClass('firstPlayerCat') && $('#box5').hasClass('firstPlayerCat') && $('#box8').hasClass('firstPlayerCat')) {
        alert ('cats rule, dog drools');
        updateCatScore();
    } else if ($('#box3').hasClass('firstPlayerCat') && $('#box6').hasClass('firstPlayerCat') && $('#box9').hasClass('firstPlayerCat')) {
        alert ('cats rule, dog drools');
        updateCatScore();
    } else if ($('#box1').hasClass('firstPlayerCat') && $('#box5').hasClass('firstPlayerCat') && $('#box9').hasClass('firstPlayerCat')) {
        alert ('cats rule, dog drools');
        updateCatScore();
    } else if ($('#box3').hasClass('firstPlayerCat') && $('#box5').hasClass('firstPlayerCat') && $('#box7').hasClass('firstPlayerCat')) {
        alert ('cats rule, dog drools');
        updateCatScore();
    } else if ($('#box4').hasClass('oppDog') && $('#box5').hasClass('oppDog') && $('#box6').hasClass('oppDog')) {
        alert ('dogs rule, cats drools');
        updateDogScore();
    } else if ($('#box1').hasClass('oppDog') && $('#box2').hasClass('oppDog') && $('#box3').hasClass('oppDog')) {
        alert ('dogs rule, cats drools');
        updateDogScore();
    } else if ($('#box7').hasClass('oppDog') && $('#box8').hasClass('oppDog') && $('#box9').hasClass('oppDog')) {
        alert ('dogs rule, cats drools');
        updateDogScore();
    } else if ($('#box1').hasClass('oppDog') && $('#box4').hasClass('oppDog') && $('#box7').hasClass('oppDog')) {
        alert ('dogs rule, cats drools');
        updateDogScore();
    } else if ($('#box2').hasClass('oppDog') && $('#box5').hasClass('oppDog') && $('#box8').hasClass('oppDog')) {
        alert ('dogs rule, cats drools');
        updateDogScore();
    } else if ($('#box3').hasClass('oppDog') && $('#box6').hasClass('oppDog') && $('#box9').hasClass('oppDog')) {
        alert ('dogs rule, cats drools');
        updateDogScore();
    }  else if ($('#box1').hasClass('oppDog') && $('#box5').hasClass('oppDog') && $('#box9').hasClass('oppDog')) {
        alert ('dogs rule, cats drools');
        updateDogScore();
    } else if ($('#box3').hasClass('oppDog') && $('#box5').hasClass('oppDog') && $('#box7').hasClass('oppDog')) {
        alert ('dogs rule, cats drools');
        updateDogScore();
    } else if ($('.firstPlayerCat').length + $('.oppDog').length === 9) {
        alert('tic tac tie');
        reset();
     }
}

$resetBtn.on('click', reset);
