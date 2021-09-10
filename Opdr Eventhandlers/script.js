/* Event Listeners */
// Syntax: element.addEventListener(event, function,useCapture);

// Opdracht 1

const myButton = document.getElementById("myButton")
mybutton.addEventListener("click", function(e){
    alert("Alert me!");
    // console.log(e);

})

// Opdracht 2
const blueBackground = document.getElementsByClassName("blue-background")
blueBackground.addEventListener("click", function(){
    blueBackground.style.backgroundColor = "blue";
    console.log();
})

const redBackground = document.getElementsByClassName(".red-background")
red-background.addEventListener("click",function(){
    redBackground.style.backgroundColor = "red";
    console.log();
})
