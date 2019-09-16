var displayElement = document.getElementsByTagName("a")[0];
var hideElement = document.getElementsByTagName("a")[1];
var textElement = document.getElementById("texte");


var displayInput = displayElement.addEventListener("click", function(){
    textElement.style.display = "block" ;
});

var hideInput = hideElement.addEventListener("click", function(){
    textElement.style.display = "none" ;
});