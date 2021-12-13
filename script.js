'use strict';
const btn = document.querySelector('#btn');
const square = document.querySelector('#square');
const text = document.querySelector('input[type=text]');
const range = document.querySelector('input[type=range]');
const eBtn = square.querySelector('#e_btn');
const circle = square.querySelector('#circle');


function colorChange(){

square.style.backgroundColor = text.value;
}

function scaleSquare(){
circle.style.height = range.value+"%";
circle.style.width = range.value+"%";
}

btn.addEventListener('click', colorChange)

eBtn.style.display = "none";

range.addEventListener('input',scaleSquare);


