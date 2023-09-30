// let buttonEl = document.getElementById("button");
let bodyEl = document.getElementById("body-item");
let containerEl = document.getElementById("containerEl");
let inputColorOne = document.getElementById("color-input-one");
let inputColorTwo = document.getElementById("color-input-two");
let displayTextEl = document.getElementById('display-text');

let backgroundColors = ['red', 'green', 'yellow', 'black', 'white'];


// buttonEl.addEventListener('click', function() {
//     let indexVal = Math.floor(Math.random() * backgroundColors.length);
//     let bgColor = backgroundColors[indexVal];
//     containerEl.style.backgroundColor = bgColor;
// });


function onColorChange() {
    bodyEl.style.background = "linear-gradient(to right," + inputColorOne.value + "," + inputColorTwo.value + ")";
    displayTextEl.textContent = bodyEl.style.background + ";";
}

inputColorOne.addEventListener("input", onColorChange);
inputColorTwo.addEventListener("input", onColorChange);
