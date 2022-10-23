'use strict'


// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

let btn = document.querySelector('.change-color');
  btn.style.display = 'block'
  btn.style.margin = '0 auto'


const colors = [
 '#FFFFFF',
 '#2196F3',
 '#4CAF50',
 '#FF9800',
 '#009688',
 '#795548',
];

function f1() {

let body = Math.floor(Math.random() * colors.length);
let selectedcolor = colors[body];
  document.body.style.background = selectedcolor;

document.querySelector('.color').innerHTML = `Цвет фона сеййчас: ${selectedcolor}`
}

btn.onclick = f1;
