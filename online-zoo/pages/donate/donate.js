const progressBar = document.querySelector('.pick-friend__progress-bar');
const point = document.querySelectorAll('.progress-bar__point');
const inputNumber = document.querySelector('.form__input-number');
let number = 0;

function hideActivePoint() {
  point.forEach(item => {
    item.classList.remove('progress-bar__point_active');
  })
}
function showActivePoint(elem) {
  hideActivePoint();
  elem.classList.add('progress-bar__point_active');
  inputNumber.value = elem.dataset.number.slice(1); 
  inputNumber.focus();
}
function matchNumber() {
  hideActivePoint();
  // show active point, if enter number match 
  point.forEach(item => {
    if (item.dataset.number.slice(1) == inputNumber.value) {
      item.classList.add('progress-bar__point_active')
    }
  })
}
function checkNumber() {
  matchNumber();
  // allow to enter only 4 digits
  let arr = inputNumber.value.split('');
  if (arr.length > 3) {
    inputNumber.value = arr.splice(0, 4).join('');
  }
}

progressBar.addEventListener('click', (event)=> {
  if (event.target.classList.contains('progress-bar__point')) showActivePoint(event.target);
    else if (event.target.classList.contains('progress-bar__point_svg')) showActivePoint(event.target.parentElement);
})
inputNumber.addEventListener('input', checkNumber);

// onload value of amount
inputNumber.value = 100;
matchNumber();