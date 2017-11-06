document.addEventListener("DOMContentLoaded", function() {
console.log('DOM is ready');

var guess = [[10],[4]]; //10 lots of 4 goes
var turnNumber = 1;
var col = 1;
var cols = [];
var rows = 10;

//create 10 arrays with 4 elements in
for (var i = 0; i < rows; i++) {
  cols[i]=[];
}
  //making colours respond when clicked
function colourResponse(event) {
  console.log(event.target.id);
  colourGridArray = $('.grid');

  colourGridArray.eq(col -1).addClass(event.target.id);
  cols[parseInt(col/4)].push(event.target.id);
  col++;
  console.log(cols[parseInt(col/4)].toString());
}

$('.colour').click(colourResponse);

//Computer random colour generator
function compRand() {
  var colourOps = ["red", "yellow", "green", "blue", "grey", "pink", "black", "orange"];
  for (var i = 0; i < 4; i++) {
  var rand = colourOps[Math.floor(Math.random() * colourOps.length)];
  var answer = [];
  answer.push(rand);
  console.log(answer);
}
}
$('h1').click(compRand);


})
