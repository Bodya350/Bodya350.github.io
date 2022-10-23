'use strict'


// TASK 
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

let enter = document.querySelector('#name-input');
let show = document.querySelector('#name-output');

function t1 (){
  if(enter.value === ''){
    show.innerHTML = 'Anonimus';
  }
  else{
    show.innerHTML = enter.value;
  }

}

enter.oninput = t1;

