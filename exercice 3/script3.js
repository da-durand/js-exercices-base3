var greenElement = document.querySelector(".green");
var redElement = document.querySelector(".red");
var blueElement = document.querySelector(".blue");
var textElement = document.getElementById("texte");

var greenInput = greenElement.addEventListener("click", function(){
    textElement.style.color = "green";
});

var redInput = redElement.addEventListener("click", function(){
    textElement.style.color = "red";
});

var blueInput = blueElement.addEventListener("click", function(){
    textElement.style.color = "blue";
});
