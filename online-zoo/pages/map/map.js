const wrapper = document.querySelector('.map');
const map = document.querySelector('.map__wrapper');
const btnPlus = document.querySelector('.map__button_plus');
const btnMinus = document.querySelector('.map__button_minus');
const mapIcons = document.querySelectorAll ('.map__wrapper img')
const animals = document.querySelectorAll('.map__icons');
const popUp = document.querySelectorAll('.map__pop-up');

map.addEventListener('mousedown', moveMap);
wrapper.addEventListener('click', showHidePopUp);
btnPlus.addEventListener('click', showMapIn);
btnMinus.addEventListener('click', showMapOut);

map.ondragstart = function() {
  return false;
};


function moveMap() {
  let startMouseX = event.pageX;
  let startMouseY = event.pageY;
  let startMapX = map.offsetLeft;
  let startMapY = map.offsetTop;
  wrapper.addEventListener('mousemove', onMouseMove);
  wrapper.addEventListener('mouseup', removeMousemove);
  wrapper.addEventListener('mouseleave', (event) => {
    wrapper.removeEventListener('mousemove', onMouseMove);
  })
 
  function onMouseMove (event) {
    moveMapTo(event.pageX, event.pageY);
  }
  function moveMapTo(pageX, pageY) {
    map.style.left =pageX - startMouseX + startMapX + 'px';
    map.style.top =pageY- startMouseY + startMapY + 'px';
  }
  function removeMousemove() {
    wrapper.removeEventListener('mousemove', onMouseMove);
  }
}

function showMapIn() {
  if (wrapper.offsetWidth * 2 <= map.offsetWidth || wrapper.offsetHeight * 2 <= map.offsetHeight) {
    return;
  } else {
      map.style.width = map.offsetWidth * 1.25 + 'px';
      map.style.height = map.offsetHeight * 1.25 + 'px';
      zoomIcons();
  } 
}
function showMapOut() {
  // when map hide
  if (map.offsetTop < 0 && map.scrollHeight / 1.4 < Math.abs(map.offsetTop) ||
    map.offsetLeft < 0 && map.scrollWidth / 1.4 < Math.abs(map.offsetLeft)) {
    map.style.left = 0 + 'px';
    map.style.top = 0 + 'px';
  }
  if (wrapper.offsetWidth / 1.3 >= map.offsetWidth || wrapper.offsetHeight / 1.3 >= map.offsetHeight) {
    return;
  } else {
      map.style.width = map.offsetWidth / 1.25 + 'px';
      map.style.height = map.offsetHeight / 1.25 + 'px';
      smallIcons();
  }
}
function zoomIcons() {
  mapIcons.forEach(icon => {
    icon.setAttribute('style', `width: ${icon.offsetWidth * 1.25}px`);
  })
  moveZoomIconsPopUp(animals);
  moveZoomIconsPopUp(popUp);
}
function moveZoomIconsPopUp(arr) {
  arr.forEach(element => {
    element.style.top = `${element.offsetTop * 1.25}px`
    element.style.left = `${element.offsetLeft * 1.25}px`
  })
}
function smallIcons() {
  mapIcons.forEach(icon => {
    icon.setAttribute('style', `width: ${icon.offsetWidth / 1.25}px`);
  })
  moveDecreaseIconsPopUp(animals);
  moveDecreaseIconsPopUp(popUp);
}
function moveDecreaseIconsPopUp(arr) {
  arr.forEach(element => {
    element.style.top = `${element.offsetTop / 1.25}px`
    element.style.left = `${element.offsetLeft / 1.25}px`
  })
}
function showHidePopUp() {
 
  popUp.forEach(pop => {
    pop.style.visibility = 'hidden';
  })

  const nameAnimal = event.target.getAttribute('data-set');
  popUp.forEach(pop => {
    if (pop.dataset.set == nameAnimal) {
      pop.style.visibility = 'visible';
    }
  })
}





