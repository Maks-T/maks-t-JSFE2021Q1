// video
const karusel = document.querySelector('.karusel');
const karuselWrap = document.querySelector('.karusel_wrapper');
const video = document.querySelectorAll('.karusel__element');
const buttonLeft = document.querySelector('.button-for-slider_left');
const buttonRight = document.querySelector('.button-for-slider_right');

let visibleVideos = 4;
let count = visibleVideos;

const donateText = document.querySelector('.donate__text');
const btnReadLess = document.querySelector(".btnReadLess");
const btnReadMore = document.querySelector(".btnReadMore");

// video
function showVideoFirstTime() {
  for(let i = 1; i <= visibleVideos; i++) {
  video[i].classList.remove('hidden'); 
  }
}
function deleteVideo() {
  video.forEach(item => {
    item.classList.add('hidden');
  })
}
function changeScreen() {
  if (document.documentElement.clientWidth > 638 && document.documentElement.clientWidth < 1599) visibleVideos = 2;
    else visibleVideos = 4;
    count = visibleVideos;
}
function changeVideo(e) {
  if (e.target.classList.contains('karusel__plug')) {
    let mainScreen = document.querySelector('.animal-camera__window');
    e.target.classList.add('hidden');
    let smallScreen = document.elementFromPoint(e.clientX, e.clientY);
    e.target.classList.remove('hidden');
    const addressMainScreen = mainScreen.getAttribute('src');
    const addressSmallScreen = smallScreen.getAttribute('src');
    mainScreen.setAttribute('src', `${addressSmallScreen}`) 
    smallScreen.setAttribute('src', `${addressMainScreen}`);
  }
}
function animate() {
  karusel.classList.add(`karusel_move`);
  setTimeout(() => karusel.classList.remove(`karusel_move`), 1000) ;
}
function moveLeft() {
  if(count !== video.length - 1) {
    animate();
    video[count + 1 - visibleVideos].classList.add('hidden');
    video[count + 1].classList.remove('hidden'); 
    count++;
    buttonRight.classList.remove('hidden');
    if(count == video.length - 1) {
      buttonLeft.classList.add('hidden');
    }
  }
}
function moveRight () {
  if(count !== visibleVideos - 1) {
    animate();
    video[count].classList.add('hidden');
    video[count - visibleVideos].classList.remove('hidden'); 
    count--;
    buttonLeft.classList.remove('hidden');
    if(count == visibleVideos - 1) {
      buttonRight.classList.add('hidden');
    }
  }
}

btnReadLess.addEventListener("click", ()=> {
 
  
  donateText.classList.add("donate__text_less"); 
  btnReadMore.style.display = "block";
  btnReadLess.style.display = "none";
});
 
btnReadMore.addEventListener("click", ()=> {
  donateText.classList.remove("donate__text_less");
  btnReadMore.style.display = "none";
  btnReadLess.style.display = "block";
  
});

// video
changeScreen(); // show necessary video onload
showVideoFirstTime(); // show necessary video onload
window.addEventListener('resize', () => {
  deleteVideo();
  changeScreen();
  showVideoFirstTime();
})
karuselWrap.addEventListener('click', (e) => changeVideo(e));
buttonLeft.addEventListener('click', moveLeft);
buttonRight.addEventListener('click', moveRight);








