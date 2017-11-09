document.addEventListener("DOMContentLoaded", function() {

  var col = 0;
  var nextSquare = [];
  var rows = 0;
  var answer = [];
  var score = [];
  var colorChoice = [];
  var otherAnswerArray = []

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
      colourGridArray.eq(col).html('');
      colorChoice.pop(this.id);
        if (col > 1){
          col--;
        }
    })

    //Reset Button
    $('#reset').click(function() {
      location.reload();
    })

    //Mouse over link function
    $('.mouseOver').mouseover(hoverResponse);
  }

  function startGame() {
    //shuffle pins
    shuffle(score);
  }

  //changing mouse to clicker over links
  function hoverResponse(event) {
    $('.mouseOver').css('cursor', 'pointer');
  }

  //making colours respond when clicked
  function colourResponse(event) {
    colourGridArray = $('.grid');
    if (colorChoice.length < 4) {
      colourGridArray.eq(col).html('<div class="' + event.target.id + '"></div>');
      colorChoice.push(this.id);
      col++;
    }
  }

  //Computer random colour generator
  function compRand() {
    var colourOps = ["red", "yellow", "green", "blue", "grey", "pink", "black", "orange"];
    for (var i = 0; i < 4; i++) {
      var rand = colourOps[Math.floor(Math.random() * colourOps.length)];
      answer.push(rand);
      otherAnswerArray.push(rand)
    }
  console.log(answer);
  console.log(otherAnswerArray)
  }

  //Play Sound
  // $(document).ready(function() {
  //       var obj = document.createElement("audio");
  //       obj.setAttribute("src", "click.wav");
  //       $.get();
  //
  //       $("#firstPage").click(function() {
  //           obj.play();
  //       });
  // });

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
    }
    if (rows > 32) {
      $('h1').html("You lose!");
      $('.compGuess0').css({'color': answer[0] });
      $('.compGuess1').css({'color': answer[1] });
      $('.compGuess2').css({'color': answer[2] });
      $('.compGuess3').css({'color': answer[3] });
    }
    answer = otherAnswerArray;
    console.log(answer)
  }

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
