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

const readMore = () => {
  let toggler = document.querySelector('#toggler');
  // console.log(toggler);
  let paragraph = document.querySelector('#box');
  // console.log(paragraph);

  if (paragraph.style.display === 'block') {
    paragraph.style.display = 'none';
    toggler.innerHTML = 'Подробнее';
  } else {
    paragraph.style.display = 'block';
    toggler.innerHTML = 'Свернуть';
  }
};


export {readMore};
