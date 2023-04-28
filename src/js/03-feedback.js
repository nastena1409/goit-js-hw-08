import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

let formData = {};
form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);


// Перевірка наявності даних у сховищі
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || "";
    messageInput.value = formData.message || "";
} 
function onInputForm(e) {
    formData[e.target.name] = e.target.value 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
    e.preventDefault();
    if (!emailInput.value || !messageInput.value) {
        return;
    }
    form.reset();
    localStorage.removeItem(STORAGE_KEY);

  console.log(formData);
}



