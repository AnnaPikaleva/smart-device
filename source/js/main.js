import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {readMore} from './modules/openblock.js';
import {moveToForm} from './modules/app.js';
import {openList} from './modules/accordion.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  document.getElementById('toggler').addEventListener('click', () => {
    readMore();
  });
  moveToForm();
  readMore();
  openList();
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// Focus

document.querySelector('.main-nav__button-link').addEventListener('click', function () {
  setTimeout(() => {
    document.querySelector('#customer-name').focus();
  }, 100);
});

// Phone

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('tel');
  if (!element) {
    return;
  }
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  IMask(element, maskOptions);
});

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('phone-number');
  if (!element) {
    return;
  }
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  IMask(element, maskOptions);
});

// Validate form
const reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

let form = document.querySelector('[data-form]');
console.log(form);
const validateButton = document.querySelector('[data-button]');
console.log(validateButton);
const phone = document.querySelector('[data-tel]');
const customerName = document.querySelector('[data-user-name]');
const fields = document.querySelectorAll('.field');

const generateError = function (text) {
  let error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
};

const removeValidation = function () {
  let errors = form.querySelectorAll('.error');
  for (let j = 0; j < errors.length; j++) {
    errors[j].remove();
  }
};

// const checkFields = function () {
//   for (let i = 0; i < fields.length; i++) {
//     if (!fields[i].value) {
//       let error = generateError('Ошибка');
//       form[i].parentElement.insertBefore(error, fields[i]);
//     }
//   }
// };

const checkPhoneMatch = function () {
  if (!reg.test(phone.value)) {
    let error = generateError('Не верный формат телефона');
    phone.parentElement.insertBefore(error, phone);
  }
};

form.addEventListener('submit', function (event) {
  event.preventDefault();
  removeValidation();
  // checkFields();
  checkPhoneMatch();
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

// const buttonToForm = document.querySelector('.main-page__container > a');
// // console.log(buttonToForm);
// const form = document.querySelector('form');
// // console.log(form);

// buttonToForm.addEventListener('click', () => {
//   form.scrollIntoView({
//     block: 'nearest',
//     behavior: 'smooth',
//   });
// });
