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




//create 10 arrays with 4 elements in
for (var i = 0; i < rows; i++) {
  nextSquare[i]=[];
}
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
          score.push(0)
        } else if ()
      }
    }

}
//   if ((answer[0] === colorChoice[0]) && (answer[1] === colorChoice[1]) && (answer[2] === colorChoice[2]) &&  (answer[3] === colorChoice[3])) {
//   $('.score2').css('background-color','red');
//     console.log("You win");
//   }
//   if ((answer[0] === colorChoice[0]) && (answer[1] === colorChoice[1]) && (answer[2] === colorChoice[2]) &&  (answer[3] === colorChoice[3])) {
// })

})
