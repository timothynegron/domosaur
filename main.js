document.querySelector("span.mess-with-me").style.fontSize = "40pt";
document.querySelectorAll("p.mess-with-me")[0].style.backgroundColor = "green";

// Hide second image and make other images move up
document.querySelectorAll("img")[1].style.visibility = "hidden";
document.querySelectorAll("img")[1].remove(); // Don't need hidden

document.querySelector("img").style.width = "324px";


// (1)
document.querySelector("span.mess-with-me").addEventListener("click", makeOrange)
function makeOrange() {
    document.querySelector("span.mess-with-me").style.color = "orange";
}

// (2)
document.querySelector("img").addEventListener("click", makeBorderRed)
function makeBorderRed(){
    document.querySelector("img").style.border = "solid";
    document.querySelector("img").style.borderColor = "red";
}

// (3)
document.querySelector("#feathers").addEventListener("click", makeTransparent)
function makeTransparent() {
    document.querySelector("#feathers").style.opacity = "0.3";
}

// (4) + stretch goal
let toggle = true;
document.querySelector("#toggle").addEventListener("click", makeColorDifferent)
function makeColorDifferent() {
    if(toggle){
        document.querySelector("#row").style.backgroundColor = "lightgrey";
    }else{
        document.querySelector("#row").style.backgroundColor = "";
    }
    console.log(toggle);
    toggle = !toggle;
}

// (5) + stretch goal
document.querySelector("#biggify").addEventListener("mouseover", makeBiggify)
function makeBiggify() {
    document.querySelector("#biggify").style.width = "200px";
}
document.querySelector("#biggify").addEventListener("mouseout", makeSmaller)
function makeSmaller() {
    document.querySelector("#biggify").style.width = "162px";
}