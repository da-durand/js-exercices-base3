var img1 = document.getElementById("image1");

var mouseOver = img1.addEventListener("mouseover" ,function(){
    document.getElementById("image1").style.border = "3px solid red";

});


var mouseOut = img1.addEventListener("mouseout" ,function(){
    document.getElementById("image1").style.border = "";

});