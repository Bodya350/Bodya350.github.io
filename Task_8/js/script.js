'use strict'

// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.



let form = document.querySelector('.login-form');

form.addEventListener('submit',(event) => {
  
  event.preventDefault();

  let str = 'Пожалуйста, заполните все поля!';
  if( document.querySelector('#mail').value == '' || document.querySelector('#pass').value == '') {
    alert(str);
    return false
  }

  const data = new FormData(form);
  const name = data.getAll('email');
  const pass = data.getAll('password');
  console.log(name);  
  console.log(pass);
  form.reset();
});
