'use strict'
    const buttonNotify = document.querySelector('.notify');
    const warningEl = document.querySelector('.warning');
    const successEl = document.querySelector('.success');
    const inputEl = document.querySelector('.input');

    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    buttonNotify.addEventListener('click', () => {
      if(inputEl.value.match(mailformat)) {
        successEl.style.display = 'block';
      } else if(!inputEl) {
        warningEl.style.display = 'block';
      } else{
        warningEl.style.display = 'block';
        return false
      } 

    })

    inputEl.addEventListener('click', () => {
      warningEl.style.display = 'none';
    })