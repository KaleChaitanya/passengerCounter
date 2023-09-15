let saveEl = document.querySelector("#save-el");
let countEl = document.querySelector("#count-el");
let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
}