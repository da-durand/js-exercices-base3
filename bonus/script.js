// Remplacer Hover par double click
var clickElement = document.getElementById("click");
var enterElement = document.getElementById("enter");
var leaveElement = document.getElementById("leave");
var overElement = document.getElementById("over");
var squareElement = document.getElementsByClassName("square");

var cptClickSpan = document.getElementById("clickCpt");
var cptEnterSpan = document.getElementById("enterCpt");
var cptLeaveSpan = document.getElementById("leaveCpt");
var cptOverSpan = document.getElementById("overCpt");

var cptClick = 0;
var cptEnter = 0;
var cptLeave = 0;
var cptOver = 0 ;

var i;

for (i = 0; i < squareElement.length; i++) {
    squareElement[i].addEventListener("click", function(){
        cptClick += 1;
        cptClickSpan.innerHTML = cptClick;
        if (cptClick == 10){
            clickElement.style.backgroundColor = "green";
        }
        else if (cptClick == 30) {
            clickElement.style.backgroundColor = "red";
        }
    });

    squareElement[i].addEventListener("mouseenter", function(){
        cptEnter += 1;
        cptEnterSpan.innerHTML = cptEnter;
        if (cptEnter == 10){
            enterElement.style.backgroundColor = "green";
        }
        else if (cptEnter == 30) {
            enterElement.style.backgroundColor = "red";
        }
    });

    squareElement[i].addEventListener("mouseleave", function(){
        cptLeave++;
        cptLeaveSpan.innerHTML = cptLeave;
        if (cptLeave == 10){
            leaveElement.style.backgroundColor = "green";
        }
        else if (cptLeave == 30) {
            leaveElement.style.backgroundColor = "red";
        }
    });

    squareElement[i].addEventListener("dblclick", function(){
        cptOver++;
        cptOverSpan.innerHTML = cptOver;
        if (cptOver == 10){
            overElement.style.backgroundColor = "green";
        }
        else if (cptOver == 30) {
            overElement.style.backgroundColor = "red";
        }
    });
}
