var greenElement = document.getElementsByClassName("color green");
var redElement = document.getElementsByClassName("color red");
var blueElement = document.getElementsByClassName("color blue");
var textElement = document.getElementById("texte");

var greenInput = greenElement.addEventListener("click", function(){
    textElement.style.color = "red";
});

