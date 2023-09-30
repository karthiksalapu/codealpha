/*
let menuEl = document.getElementById("menu-item");
let crossEl = document.getElementById("cross-option");
let divEl = document.getElementById("div-item-sm");

// menuEl.classList.toggle()

menuEl.addEventListener("click", function() {
    divEl.classList.toggle("navitems-container-sm");
    crossEl.classList.toggle("cross-button");
    menuEl.classList.toggle("no-display");
});

crossEl.addEventListener("click", function() {
    divEl.classList.toggle("navitems-container-sm");
    crossEl.classList.toggle("cross-button");
    menuEl.classList.toggle("no-display");
});

*/

const formEl = document.getElementById("form-item");
let sendBtn = document.getElementById("send-btn");

let taxcalcitem = document.getElementById("taxcalcitem");


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
});


taxcalcitem.onclick = function() {
    taxcalcitem.classList.add("taxCalculator");
};
