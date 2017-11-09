document.addEventListener("DOMContentLoaded", function() {

  var col = 0;
  var nextSquare = [];
  var rows = 0;
  var answer = [];
  var score = [];
  var colorChoice = [];
  var clickAudio = new Audio();
  var runGame = false; //variable so game can't begin till start button clicked

  //calling Functions
  setUpEventListeners();
  startGame();
  function setUpEventListeners() {
    //calling random generator
    $('#firstPage').click(compRand);

    //Calling colour click function
    $('.colour').click(colourResponse);

    //Undo Button
    $('#undo').click(function(){
      colourGridArray = $('.grid');
        if (col > 1){
          col--;
        }
      colourGridArray.eq(col).html('');
      colorChoice.pop(this.id);
    })

    //Reset Button
    $('#reset').click(function() {
      location.reload();
    })
  }

  function startGame() {
    //shuffle pins
    shuffle(score);
  }

  //Computer random colour generator
  function compRand() {
    playAudio();
    var colourOps = ["red", "yellow", "green", "blue", "grey", "pink", "black", "orange"];
    var tempArray = colourOps,i,r;
    for (var i = 0; i < 4; i++) {
      r = colourOps[Math.floor(Math.random() * colourOps.length)];
      if (tempArray[r] === undefined) {
        answer.push(r);
        tempArray[r] = true;
      } else {
        i--;
      }
      runGame=true;
    }
  console.log(answer);
  }

  //making colours respond when clicked
  function colourResponse(event) {
    if (runGame) {
    colourGridArray = $('.grid');
      if (colorChoice.length < 4) {
        colourGridArray.eq(col).html('<div class="' + event.target.id + '"></div>');
        colorChoice.push(this.id);
        col++;
      }
    }
  }

  // Play Sound
  function playAudio(){
    var backgroundMusic = new Audio('Sounds/click.wav');
    backgroundMusic.play();
  }

  function setScoringEventListener(){
    // Scoring
    $('#score1').click(function (){
      console.log(score)
      getResult();

      //getting score pins to show
      pushOrPullPins();
      colorChoice = [];
      score = [];
      rows = rows+4;
    })
  }

  setScoringEventListener();

  function getResult() {
    for (var i =0; i < 4; i++) {
      if (colorChoice[i] === answer[0]) {
        if (colorChoice[0] === answer[0]) {
          score.push("red")
          console.log(answer)
        } else {
          score.push("white")
        }
      } else if (colorChoice[i] === answer[1]) {
        if (colorChoice[1] === answer[1]) {
          score.push("red")
          console.log(answer)
        } else {
          score.push("white")
        }
      } else if (colorChoice[i] === answer[2]) {
        if (colorChoice[2] === answer[2]) {
          score.push("red")
          console.log(answer)
        } else {
          score.push("white")
        }
      } else if (colorChoice[i] === answer[3]) {
        if (colorChoice[3] === answer[3]) {
          score.push("red")
          console.log(answer)
        } else {
          score.push("white")
        }
      } else {
        score.push("nope");
      }
    }
    if ((answer[0] === colorChoice[0]) && (answer[1] === colorChoice[1]) && (answer[2] === colorChoice[2]) &&  (answer[3] === colorChoice[3])) {
      $('h1').html("You Win!");
      $('.compGuess0').css({'color': answer[0] });
      $('.compGuess1').css({'color': answer[1] });
      $('.compGuess2').css({'color': answer[2] });
      $('.compGuess3').css({'color': answer[3] });
      runGame = false;
    }
    if (rows > 32) {
      $('h1').html("You lose!");
      $('.compGuess0').css({'color': answer[0] });
      $('.compGuess1').css({'color': answer[1] });
      $('.compGuess2').css({'color': answer[2] });
      $('.compGuess3').css({'color': answer[3] });
      runGame = false;
    }
    console.log(answer)
  }

  //pushing pin colours into scores
  function pushOrPullPins() {
    for (var i = 0; i < score.length; i++) {
      var pinNumber = i+1+rows;
      console.log(pinNumber);
      if (score[i] === "white") {
        $('.pin' + pinNumber).html('&#x26AA;')
      }
      if (score[i] === "red") {
        $('.pin' + pinNumber).html('&#x1F534;')
      }
    }
  }

  //shuffles score pins into random order.
  function shuffle (array) {
    var i = 0;
    var j = 0;
    var temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }
})
