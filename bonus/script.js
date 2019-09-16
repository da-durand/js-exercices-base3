var clickElement = document.getElementById("click");
var enterElement = document.getElementById("enter");
var leaveElement = document.getElementById("leave");
var overElement = document.getElementById("over");
var squareElement = document.querySelector(".square");

var clickInput = squareElement.addEventListener("click", function(){

    clickElement.style.backgroundColor ="green"
});