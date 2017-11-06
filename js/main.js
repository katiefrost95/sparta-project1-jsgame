document.addEventListener("DOMContentLoaded", function() {
console.log('DOM is ready');

var computerInput = 0;
var emptySquare = true;

//making colours respond when clicked
function colourResponse(event) {
  console.log(event.target.id);
  colourGridArray = $('.grid');
  console.log(colourGridArray.length)
  if (emptySquare = true) {
    $(".grid").addClass(event.target.id);

  }
}


$('.colour').click(colourResponse);

});
