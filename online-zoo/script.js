import { SliderEndless, SliderRange } from "./sliders.js";

//----------- SLIDER PETS start------------
/*const sliderPets = document.querySelector(".slider__cards");
const slidesPets = document.getElementsByClassName("slider__card");
const btnSliderRight = document.querySelector(".button-for-slider_right");
const btnSliderLeft = document.querySelector(".button-for-slider_left");

btnSliderRight.addEventListener("click", () => {
    sliderPets.insertBefore(slidesPets[slidesPets.length-1], sliderPets.firstChild);
});

btnSliderLeft.addEventListener("click", () => {
    sliderPets.insertBefore(slidesPets[0], sliderPets.lastChild);   
});

*/
const sliderPetsRow1 = new SliderEndless(
  "#slider__cards_row1",
  ".slider__card",
  30,
  ".button-for-slider_left",
  ".button-for-slider_right"
);
const sliderPetsRow2 = new SliderEndless(
  "#slider__cards_row2",
  ".slider__card",
  30,
  ".button-for-slider_left",
  ".button-for-slider_right"
);

//----------- SLIDER PETS  end------------
//----------- SLIDER TESTIMONIALS start------------
const sliderTestimonials = new SliderRange(
  ".testimonials__cards",
  ".testimonials__card",
  30,
  ".button-for-slider_left",
  ".button-for-slider_right"
);

const rangeTestimonials = document.querySelector(".tesmimonials__range");
let prevRangeValue = rangeTestimonials.value;
let timerTestimonialsStop = false; //false
sliderTestimonials.resizeWindow();

rangeTestimonials.addEventListener("input", () => {
  
  console.log("rangeTestimonials.value", rangeTestimonials.value);
  console.log("prevRangeValue", prevRangeValue);
  if (rangeTestimonials.value - prevRangeValue > 0) {
    sliderTestimonials.moveLeft();   
  } else {    
    sliderTestimonials.moveRight();
  }
  prevRangeValue = rangeTestimonials.value;
  
});

rangeTestimonials.addEventListener("mousedown", () => {
    timerTestimonialsStop = true;
});

rangeTestimonials.addEventListener("mouseup", () => {
    timerTestimonialsStop = false; //false
});


let timerTestimonials = setInterval(() => {
  if (!timerTestimonialsStop) { 
     prevRangeValue = rangeTestimonials.value;
     rangeTestimonials.value++;
     sliderTestimonials.moveLeft();
     if (prevRangeValue>=8) {
      prevRangeValue = rangeTestimonials.value = 1;
      sliderTestimonials.resizeWindow();
     }       
  }
}, 10000);

document.querySelector(".testimonials__cards").addEventListener("click", () => {
    timerTestimonialsStop = true;  
    setTimeout(() => 
      {timerTestimonialsStop = false;}
      , 30000);
});


//----------- SLIDER TESTIMONIALS end------------

window.addEventListener("resize", setScreenSize);

function setScreenSize() {
 sliderPetsRow1.resizeWindow();
  sliderPetsRow2.resizeWindow();
  prevRangeValue = rangeTestimonials.value = 1;
  sliderTestimonials.resizeWindow();  


}
