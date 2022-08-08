"use strict";
let count = 0;
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const decrease = document.getElementById('decrease');
let number = document.getElementById('count');
increase.addEventListener('click', () => {
    count++;
    number.textContent = count;
    if (count > 0) {
        number.style.color = 'green';
    }
});
decrease.addEventListener('click', () => {
    count--;
    number.textContent = count;
    if (count < 0) {
        number.style.color = 'red';
    }
});
reset.addEventListener('click', () => {
    count = 0;
    number.textContent = count;
    number.style.color = 'black';
});
