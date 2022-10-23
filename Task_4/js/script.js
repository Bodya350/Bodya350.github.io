'use strict'



//Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// let num = 0;

// function f1(){
//   num += 1;
//   document.querySelector('#value').innerHTML = num;
// }

// function f2(){
//   num -= 1;
//   document.querySelector('#value').innerHTML = num;
// }

// document.querySelector('.increment').onclick = function (){
//   f1();
// }
// document.querySelector('.decrement').onclick = function (){
//   f2();
// }


let num = 0;

function f1(){
  return num += 1;
  
}

function f2(){
  return num -= 1;
}

document.querySelector('.increment').onclick = function (){
  document.querySelector('#value').innerHTML = f1();
}
document.querySelector('.decrement').onclick = function (){
  document.querySelector('#value').innerHTML = f2();
}