// const readMore = () => {
//   let toggler = document.getElementById('toggler');
//   // console.log(toggler);
//   let paragraph = document.getElementById('box');
//   // console.log(paragraph);

//   if (paragraph.style.display === 'block') {
//     paragraph.style.display = 'none';
//     toggler.innerHTML = 'Подробнее';
//   } else {
//     paragraph.style.display = 'block';
//     toggler.innerHTML = 'Свернуть';
//   }
// };

// const readMore = () => {
//   let toggler = document.querySelector('#toggler');
//   // console.log(toggler);
//   let paragraph = document.querySelector('#box');
//   // console.log(paragraph);

//   if (paragraph.style.display === 'block') {
//     paragraph.style.display = 'none';
//     toggler.innerHTML = 'Подробнее';
//   } else {
//     paragraph.style.display = 'block';
//     toggler.innerHTML = 'Свернуть';
//   }
// };

let isMobile = window.screen.availWidth <= 767;
// console.log(isMobile);

let toggler = document.querySelector('#toggler');
let paragraph = document.querySelector('#box');
let subText = document.querySelector('#close-mobile');
// console.log(textSub);
paragraph.style.display = 'none';

const readMore = () => {
  if (isMobile) {
    if (paragraph.style.display === 'block') {
      subText.style.display = 'none';
      paragraph.style.display = 'none';
      toggler.innerHTML = 'Подробнее';
    } else {
      paragraph.style.display = 'block';
      subText.style.display = 'block';
      toggler.innerHTML = 'Свернуть';
    }
  } else {
    if (paragraph.style.display === 'block') {
      paragraph.style.display = 'none';
      // subText.style.display = 'block';
      toggler.innerHTML = 'Подробнее';
    } else {
      paragraph.style.display = 'block';
      // subText.style.display = 'block';
      toggler.innerHTML = 'Свернуть';
    }
  }
};

export {readMore};
