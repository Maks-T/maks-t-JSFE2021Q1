const filters = document.querySelector(".filters");
const btnContainer = document.querySelector(".btn-container");
const btn = btnContainer.querySelectorAll(".btn");
const outputs = filters.querySelectorAll("output");
const inputsRange = filters.querySelectorAll("input");
const canvas = document.querySelector("canvas");
const image = document.querySelector('img');
const btnNext = document.querySelector(".btn-next");
const btnLoad = document.querySelector('input[type="file"]');
const btnSave = document.querySelector(".btn-save");
const btnReset = document.querySelector(".btn-reset");
const picture = document.querySelector(".editor img");
const btnFullScreen = document.querySelector(".fullscreen");

picture.setAttribute("crossOrigin", "anonymous");
let filterValues = {
  blur: 0,
  invert: 0,
  sepia: 0,
  saturate: 100,
  hue: 0,
};

const base =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/";
const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];
let curIndexImage = 0;

loadImage("assets/img/img.jpg");

function loadImage(src) {
  const img = new Image();
  img.src = src;
  img.setAttribute("crossOrigin", "anonymous");
  img.onload = function () {
    picture.src = src;
    console.log("CANVAS  =  width: ", img.width, "; height: ", img.height);
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    outputs.forEach((output, i) => {
      filterValues[Object.keys(filterValues)[i]] = output.value;
    });
    let ratio =  canvas.width >= canvas.height ? canvas.width/image.width : canvas.height/image.height;
    ctx.filter = `blur(${filterValues.blur*ratio}px) invert(${filterValues.invert}%) sepia(${filterValues.sepia}%) saturate(${filterValues.saturate}%) hue-rotate(${filterValues.hue}deg)`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };
  
}

function applyFilter() {
  const ctx = canvas.getContext("2d");
  outputs.forEach((output, i) => {
    filterValues[Object.keys(filterValues)[i]] = output.value;
  });
  let ratio =  canvas.width >= canvas.height ? canvas.width/image.width : canvas.height/image.height;
  ctx.filter = `blur(${filterValues.blur*ratio}px) invert(${filterValues.invert}%) sepia(${filterValues.sepia}%) saturate(${filterValues.saturate}%) hue-rotate(${filterValues.hue}deg)`;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(picture, 0, 0);
  
}

//------ input change ------
filters.addEventListener("input", changeInput);

function changeInput(event) {
  if (event.target.matches("input")) {
    applyFilter();
    const suffix = event.target.dataset.sizing || "";

    document.documentElement.style.setProperty(
      `--${event.target.name}`,
      event.target.value + suffix
    );
    event.target.nextElementSibling.value = event.target.value;
  }
}
//---------------------------

//-----CLick Button Next Picture -------
btnNext.addEventListener("click", clickBtnNext);

function clickBtnNext() {

  const index = curIndexImage % images.length;
  const imageSrc = base + getTimes() + images[index];
  loadImage(imageSrc);
  curIndexImage++;
  btnNext.disabled = true;
  setTimeout(function () {
    btnNext.disabled = false;
  }, 1000);
}

//--------------------------------------

//-----CLick Button Load Picture -------
btnLoad.addEventListener("change", clickBtnLoad);

function clickBtnLoad() {
  const file = btnLoad.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    loadImage(reader.result);
  };
  reader.readAsDataURL(file);
  btnLoad.value = "";
}

//--------------------------------------

//-----CLick Button Save Picture -------
btnSave.addEventListener("click", clickBtnSave);

function clickBtnSave() {
  let link = document.createElement("a");
  link.download = "download.png";
  applyFilter();
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
}
//--------------------------------------

//-----CLick Button Reset Picture -------
btnReset.addEventListener("click", clickBtnReset);

function clickBtnReset() {
  inputsRange.forEach((input) => {
    if (input.name == "saturate") input.value = 100;
    else input.value = 0;

    input.nextElementSibling.value = input.value;
    const suffix = input.dataset.sizing || "";
    document.documentElement.style.setProperty(
      `--${input.name}`,
      input.value + suffix
    );
  });
  applyFilter();
}
//--------------------------------------

function getTimes() {
  const date = new Date();
  const h = date.getHours();
  let res = "evening";

  if (h >= 6 && h < 12) res = "morning";
  else if (h >= 12 && h < 18) res = "day";
  else if (h >= 18 && h < 24) res = "evening";
  else res = "night";
  console.log("now :" + res.toUpperCase());
  return `/${res}/`;
}

btnFullScreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});
