'use strict'

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


let val = document.getElementById('validation-input');

function func() {
      if (val.getAttribute('data-length') == val.value.length){
        val.classList.add('valid');
        val.classList.remove('invalid');
      }
      else{
        val.classList.remove('valid');
        val.classList.add('invalid');
      }

  }
  
  val.onblur = func;

