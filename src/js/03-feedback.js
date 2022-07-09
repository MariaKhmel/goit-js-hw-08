import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const STORAGE_KEY = 'feedback-form-state';


const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),

};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));



const emailItem = refs.form.elements.email;
const messageItem = refs.form.elements.message;

populateTextarea();


function onFormSubmit(evt) {
  evt.preventDefault();

  if (emailItem.value.length !== 0 && messageItem.value.length !== 0) {

    console.log(messageItem.value.length)
     evt.currentTarget.reset();
console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
    
  } else {
    Notify.failure('Please fill in both fields');
  }

}


function onFormInput(evt) {
  const email = emailItem.value;
    const message = messageItem.value;
localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));

}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const formData = JSON.parse(savedMessage);
    emailItem.value = formData.email;
    messageItem.value = formData.message;
  }
}
