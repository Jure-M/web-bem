class ImgSlider {
  constructor(slider) {
    this.slider = document.querySelector(`#${slider}`);
    this.controls = document.querySelectorAll(".c-slider__control");
    this.slides = document.querySelectorAll(".c-slider__slide");
    this.slidesLength = this.slides.length - 1;
    this.getCurrentSlideId();
    this.events();
  }

  events() {
    this.slider.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(e) {
    if (e.target.classList.contains("c-slider__control")) {
      this.handleDots(e);
    }
    if (e.target.closest(".c-slider__arrow--left")) {
      console.log(e);
      this.prevSlide();
    }
    if (e.target.closest(".c-slider__arrow--right")) {
      console.log(e);
      this.nextSlide();
    }
  }

  handleDots(e) {
    this.currentSlideId = parseInt(e.target.getAttribute("data-slide"));
    this.changeSlide();
  }

  prevSlide() {
    if (this.currentSlideId === 0) {
      this.currentSlideId = this.slidesLength;
    } else {
      this.currentSlideId = this.currentSlideId - 1;
    }
    this.changeSlide();
  }

  nextSlide() {
    if (this.currentSlideId === this.slidesLength) {
      this.currentSlideId = 0;
    } else {
      this.currentSlideId = this.currentSlideId + 1;
    }
    this.changeSlide();
  }

  changeSlide() {
    this.activateNodes(this.slides);
    this.activateNodes(this.controls);
  }

  activateNodes(nodes) {
    nodes.forEach((node) => {
      if (parseInt(node.getAttribute("data-slide")) === this.currentSlideId) {
        node.classList.add("js-isActive");
      } else {
        node.classList.remove("js-isActive");
      }
    });
  }

  getCurrentSlideId() {
    console.log(this.slides);
    this.slides.forEach((slide) => {
      if (slide.classList.contains("js-isActive")) {
        this.currentSlideId = parseInt(slide.getAttribute("data-slide"));
      }
    });
  }
}

export default ImgSlider;
