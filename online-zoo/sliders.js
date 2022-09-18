export class SliderEndless {
  constructor(
    classNameContent, 
    classNameSlide,
    gap,
    classNameBtnLeft,
    classNameBtnRight
  ) {
    this.classNameContent = classNameContent;
    this.classNameSlide = classNameSlide;
    this.gap = gap;
    this.classNameBtnLeft = classNameBtnLeft;
    this.classNameBtnRight = classNameBtnRight;

    this.content = document.querySelector(this.classNameContent);
    this.slides = document.querySelectorAll(this.classNameContent+" "+this.classNameSlide);    
    this.btnLeft = document.querySelector(this.classNameBtnLeft);
    this.btnRight = document.querySelector(this.classNameBtnRight);
 
    this.step = 0;
    this.resizeWindow();

    this.btnLeft.addEventListener("click", this.moveLeft);
    this.btnRight.addEventListener("click", this.moveRight);
  }

  moveLeft = () => {
    
    if (this.step < 0) {
      let left = Math.floor(
        parseInt(this.slides[this.slides.length - 1].style.left.slice(0, -2))
      );
      this.slides[0].style.left = left + this.offsetWidth + this.gap + "px";
      this.content.appendChild(this.slides[0]);
      this.slides = document.querySelectorAll(this.classNameContent+" "+this.classNameSlide);
      this.step++;
    }

    for (let i = 0; i < this.slides.length; i++) {
      let left = Math.floor(parseInt(this.slides[i].style.left.slice(0, -2)));
      this.slides[i].style.left = left - this.offsetWidth - this.gap + "px";
    }
    this.step--;
  };

  moveRight = () => {
   
    this.step = 0;
    if (this.step == 0) {
      this.content.insertBefore(
        this.slides[this.slides.length - 1],
        this.content.firstElementChild
      );
      this.slides = document.querySelectorAll(this.classNameContent+" "+this.classNameSlide);
      this.slides[0].style.left = -2 * (this.offsetWidth + this.gap) + "px";

      this.step = -1;
    }

    for (let i = 0; i < this.slides.length; i++) {
      let left = Math.floor(parseInt(this.slides[i].style.left.slice(0, -2)));
      this.slides[i].style.left = left + this.offsetWidth + this.gap + "px";
    }
    this.step++;
  };

  resizeWindow = () => {
    
    this.offsetWidth = this.slides[0].offsetWidth;

    for (let i = 0; i < this.slides.length; i++) {
      if (i == 0) this.slides[i].style.left = i * this.offsetWidth + "px";
      else this.slides[i].style.left = i * this.offsetWidth + this.gap * i + "px";
    }

    this.content.insertBefore(
      this.slides[this.slides.length - 1],
      this.content.firstElementChild
    );
    this.slides = document.querySelectorAll(this.classNameContent+" "+this.classNameSlide);
    this.slides[0].style.left = -1 * this.offsetWidth - this.gap + "px";

    
  
  }
}

export class SliderRange {
  constructor(
    classNameContent, 
    classNameSlide,
    gap,
    classNameBtnLeft,
    classNameBtnRight,
    classNameRange
  ) {
    this.classNameContent = classNameContent;
    this.classNameSlide = classNameSlide;
    this.gap = gap;
    this.classNameBtnLeft = classNameBtnLeft;
    this.classNameBtnRight = classNameBtnRight;

    this.content = document.querySelector(this.classNameContent);
    this.slides = document.querySelectorAll(this.classNameContent+" "+this.classNameSlide);    
    this.btnLeft = document.querySelector(this.classNameBtnLeft);
    this.btnRight = document.querySelector(this.classNameBtnRight);

    this.step = 0;
    this.resizeWindow();
  }

  moveLeft = () => {
    
    if (this.step < 0) {
     /* let left = Math.floor(
        parseInt(this.slides[this.slides.length - 1].style.left.slice(0, -2))
      );
      this.slides[0].style.left = left + this.offsetWidth + this.gap + "px";
      this.content.appendChild(this.slides[0]);
      this.slides = document.querySelectorAll(this.classNameContent+" "+this.classNameSlide);
      this.step++;*/
    }

    for (let i = 0; i < this.slides.length; i++) {
      let left = Math.floor(parseInt(this.slides[i].style.left.slice(0, -2)));
      this.slides[i].style.left = left - this.offsetWidth - this.gap + "px";
    }
    this.step--;
  };

  moveRight = () => {
   
    this.step = 0;
   /*if (this.step == 0) {
      this.content.insertBefore(
        this.slides[this.slides.length - 1],
        this.content.firstElementChild
      );
      this.slides = document.querySelectorAll(this.classNameContent+" "+this.classNameSlide);
      this.slides[0].style.left = -2 * (this.offsetWidth + this.gap) + "px";

      this.step = -1;
    }*/

    for (let i = 0; i < this.slides.length; i++) {
      let left = Math.floor(parseInt(this.slides[i].style.left.slice(0, -2)));
      this.slides[i].style.left = left + this.offsetWidth + this.gap + "px";
    }
    this.step++;
  };

  resizeWindow = () => {
    this.step = 0;
    this.offsetWidth = this.slides[0].offsetWidth;

    for (let i = 0; i < this.slides.length; i++) {
      if (i == 0) this.slides[i].style.left = i * this.offsetWidth + "px";
      else this.slides[i].style.left = i * this.offsetWidth + this.gap * i + "px";
    }

   /* this.content.insertBefore(
      this.slides[this.slides.length - 1],
      this.content.firstElementChild
    );
    this.slides = document.querySelectorAll(this.classNameContent+" "+this.classNameSlide);
    this.slides[0].style.left = -1 * this.offsetWidth - this.gap + "px";

    this.btnLeft.addEventListener("click", this.moveLeft);
    this.btnRight.addEventListener("click", this.moveRight);*/
  
  }
}

