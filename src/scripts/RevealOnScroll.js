import throttle from "lodash/throttle";

class RevealOnScroll {
  constructor() {
    this.sections = document.querySelectorAll(".section--hidden");
    this.browserHeight = window.innerHeight;
    this.events();
  }

  events() {
    window.addEventListener(
      "scroll",
      throttle(() => {
        this.calcCaller();
      }, 300)
    );
  }

  calcCaller() {
    this.sections.forEach((el) => {
      console.log(el.getBoundingClientRect());
      console.log(window.innerHeight);

      if (this.browserHeight - el.getBoundingClientRect().y - 100 > 0) {
        el.classList.remove("section--hidden");
      }
    });
  }
}

export default RevealOnScroll;
