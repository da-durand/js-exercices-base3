var passwordElement = document.getElementById("motdepasse");
var confirmElement = document.getElementById("confirmation");
var buttonInput = document.getElementsByTagName("button")[0];


var verifInput = buttonInput.addEventListener("click", function () {
    if (passwordElement.value != confirmElement.value) {
        passwordElement.style.borderColor = "red";
        confirmElement.style.borderColor = "red";
    }
    else{
        passwordElement.style.borderColor = "green";
        confirmElement.style.borderColor = "green";
    }
});
