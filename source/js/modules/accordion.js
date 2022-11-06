const accordions = document.querySelectorAll('.accordion');
const accList = document.querySelectorAll('.accordion__list');
// const accordion = document.querySelector('.accordion');

document.querySelector('.no-js').classList.remove('no-js');

function openList() {
  accordions.forEach((element) => {
    element.addEventListener('click', () => clickOnButton(element, accordions));
  });
}

function clickOnButton(element) {
  accordions.forEach((button) => button.classList.remove('active'));
  if (element.nextElementSibling.style.display === 'block') {
    element.nextElementSibling.style.display = 'none';
    element.classList.remove('active');
    return;
  }

  accList.forEach((item) => {
    item.style.display = 'none';
  });

  element.classList.add('active');
  element.nextElementSibling.style.display = 'block';
}


export {openList};
