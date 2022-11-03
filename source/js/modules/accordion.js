const accordions = document.querySelectorAll('.accordion');
const accList = document.querySelectorAll('.accordion__list');

function openList() {
  accordions.forEach((element) => {
    element.addEventListener('click', () => clickButton(element));
  });
}

function clickButton(element) {
  if (element.nextElementSibling.style.display === 'block') {
    element.nextElementSibling.style.display = 'none';
    return;
  }

  accList.forEach((item) => {
    item.style.display = 'none';
  });

  element.nextElementSibling.style.display = 'block';
}


export {openList};
