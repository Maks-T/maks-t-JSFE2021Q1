function clickSliderLeft() {
   let sliderBox = document.getElementsByClassName('articles__slider-slide');
     
   let arraySlideHTML = [];
     
   arraySlideHTML.push(sliderBox[1].innerHTML);
   arraySlideHTML.push(sliderBox[2].innerHTML);
   arraySlideHTML.push(sliderBox[0].innerHTML);

   sliderBox[0].innerHTML = arraySlideHTML[0];
   sliderBox[1].innerHTML = arraySlideHTML[1];
   sliderBox[2].innerHTML = arraySlideHTML[2];
   
  
}

function clickSliderRight() {
   let sliderBox = document.getElementsByClassName('articles__slider-slide');
     
   let arraySlideHTML = [];
  
  
   arraySlideHTML.push(sliderBox[2].innerHTML);
   arraySlideHTML.push(sliderBox[0].innerHTML);
   arraySlideHTML.push(sliderBox[1].innerHTML);

   sliderBox[0].innerHTML = arraySlideHTML[0];
   sliderBox[1].innerHTML = arraySlideHTML[1];
   sliderBox[2].innerHTML = arraySlideHTML[2];
       
   
 }

