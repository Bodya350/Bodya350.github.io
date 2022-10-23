'use strict'


// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

let num = document.querySelector('.num');
let one = document.querySelector('#one');
let font = document.querySelector('.font');
let f = 10;
one.oninput = () => {
  let pixel = font.style.fontSize = f + 'px';

        if(one.value > 50 && one.value <= 100){
          f+=1
      }
        if( one.value > 0 && one.value < 50){
          f-=1
      }
    num.innerHTML = pixel ;
    console.log(one.value);
    
}