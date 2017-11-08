document.addEventListener("DOMContentLoaded", function() {

var col = 0;
var nextSquare = [];
var rows = 0;
var answer = [];
var colorChoice = [];
var whitePins = [];
var redPins = [];
var score = [];
var firstRound = true;

// holds the current user answer
var colorChoice = [];
  //making colours respond when clicked
function colourResponse(event) {
  while (true) {

  }
  colourGridArray = $('.grid');
  if (colorChoice.length < 4) {
    colourGridArray.eq(col).addClass(event.target.id);
    colorChoice.push(this.id);
    col++;
  }
}
$('.colour').click(colourResponse);


//Computer random colour generator
function compRand() {
  var colourOps = ["red", "yellow", "green", "blue", "grey", "pink", "black", "orange"];
  for (var i = 0; i < 4; i++) {
  var rand = colourOps[Math.floor(Math.random() * colourOps.length)];
  answer.push(rand);
}
console.log(answer);
}
$('h1').click(compRand);

// Scoring
$('.score1').click(function() {
    function getResult() {
      for (var i =0; i < 4; i++) {
        if (colorChoice[i] === answer[0]) {
          if (colorChoice[0] === answer[0]) {
            score.push("red")
          } else {
            score.push("white")
          }
        } else if (colorChoice[i] === answer[1]) {
          if (colorChoice[1] === answer[1]) {
            score.push("red")
          } else {
            score.push("white")
          }
        } else if (colorChoice[i] === answer[2]) {
          if (colorChoice[2] === answer[2]) {
            score.push("red")
          } else {
            score.push("white")
          }
        } else if (colorChoice[i] === answer[3]) {
          if (colorChoice[3] === answer[3]) {
            score.push("red")
          } else {
            score.push("white")
          }
        } else {
          score.push("nope");
        }
      }
      if ((answer[0] === colorChoice[0]) && (answer[1] === colorChoice[1]) && (answer[2] === colorChoice[2]) &&  (answer[3] === colorChoice[3])) {
        alert("You win!");
        answer=[];
        colorChoice=[];
        // score=[];
      }
      if (rows > 32) {
        alert("You Lose");
        answer=[];
        colorChoice=[];
        // score=[];
      }
    }
getResult();
console.log(score)

shuffle(score);
//getting score pins to show
for (var i = 0; i < score.length; i++) {
  if (score[i] === "white") {
    $('.pin' + (i+1+rows)).html('&#x26AA;')
  }
  if (score[i] === "red") {
    $('.pin' + (i+1+rows)).html('&#x1F534;')
  }
}
colorChoice = [];
score = [];
rows = rows+4;
})
//shuffles score pins into random order.
function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

})
