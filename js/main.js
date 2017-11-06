document.addEventListener("DOMContentLoaded", function() {
console.log('DOM is ready');

var computerInput = 0;
var emptySquare = true;

//making colours respond when clicked
function colourResponse(event) {
  console.log(event.target.id);
  colourGridArray = $('.grid');
  console.log(colourGridArray.length)
  if (emptySquare) {
    colourGridArray.eq(0).addClass(event.target.id);
    colourGridArray.push($(this));
    emptySquare = false;
  } else if (emptySquare = true) {
    colourGridArray.eq(1).addClass(event.target.id);
    colourGridArray.push($(this));
    emptySquare = false;
  }
}
$('.colour').click(colourResponse);

function compRand() {
  var colourOps = ["red", "yellow", "green", "blue", "grey", "pink", "black", "orange"];
  var rand = colourOps[Math.floor(Math.random() * colourOps.length)];
  $('compGuess').css('background',rand);
  console.log(rand);
}
$('h1').click(compRand);


});
