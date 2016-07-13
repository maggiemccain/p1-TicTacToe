console.log('second attempt');
var $resetBtn = $('#resetBtn');
var turn = true; //cat turn
var $cards = $('.card');
var $currentPlayer = $('#currentPlayer');

function reset() {
  $('.card').removeClass('firstPlayerCat');
  $('.card').removeClass('oppDog');
  $('.playerDog').removeClass('currentPlayer');
  $('.playerCat').addClass('currentPlayer');
  turn = true;
  player = [];
  opp = [];
}

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
    }, 200);
  } else if (turn === false){
      var $cardClickedId = event.target.id;
      var $cardClicked = $(event.target);
      $cardClicked.addClass('oppDog');
      checkWinner();
      turn = true;
      setTimeout(function(){
        $('.playerDog').removeClass('currentPlayer');
        $('.playerCat').addClass('currentPlayer');
      }, 200);
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
