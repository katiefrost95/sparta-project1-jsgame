document.addEventListener("DOMContentLoaded", function() {
console.log('DOM is ready');

var col = 0;
var nextSquare = [];
var rows = 10;
var answer = [];
var colorChoice = [];
var whitePins = [];
var redPins = [];
var score = [];

// holds the current user answer
var colorChoice = [];
  //making colours respond when clicked
function colourResponse(event) {

  colourGridArray = $('.grid');

  if (colorChoice.length < 4) {
    colourGridArray.eq(col).addClass(event.target.id);
    colorChoice.push(this.id);
    console.log(colorChoice);
    col++;
    console.log(col);
  }
}

$('.colour').click(colourResponse);

//Computer random colour generator
function compRand() {
  var colourOps = ["red", "yellow", "green", "blue", "grey", "pink", "black", "orange"];
  for (var i = 0; i < 4; i++) {
  var rand = colourOps[Math.floor(Math.random() * colourOps.length)];
  answer.push(rand);
  console.log(answer);
}
}
$('h1').click(compRand);

// Scoring
$('.score1').click(function() {
  console.log(answer);
  console.log(colorChoice);
    function getResult() {
      for (var i =0; i < 4; i++) {
        if (colorChoice[i] === answer[0]) {
          if (colorChoice[0] === answer[0]) {
            score.push("red")
        // $('.pinScore').css('background-color','red');
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
      }
      // put in code to goto next rows
    }
getResult();
console.log(score);
colorChoice = [];
score = [];
})

})
