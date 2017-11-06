document.addEventListener("DOMContentLoaded", function() {
console.log('DOM is ready');

var colourBead = document.getElementsByClassName("colour");

colourResponse();
function colourResponse () {
  for (var i = 0; i < colourBead.length; i++) {
    var colBead = colourBead[i];
    colBead.addEventListener ('click', function (event){
    console.log(this + " was clicked");
    })
  }
}


})
