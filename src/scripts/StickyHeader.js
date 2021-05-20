import throttle from "lodash/throttle";

class StickyHeader {
  constructor() {
    this.appHeader = document.querySelector("#primary-nav");
    this.events();
    this.previusScrollY = window.scrollY;
  }

  events() {
    window.addEventListener(
      "scroll",
      throttle(() => this.runsOnScroll(), 300)
    );
  }

  runsOnScroll() {
    this.checkScrollDirection();

    if (this.scrollDirection === "down") {
      this.appHeader.classList.add("js-scrolling");
      this.appHeader.classList.add("js-scrolling-down");
    }
    if (this.scrollDirection === "up") {
      this.appHeader.classList.remove("js-scrolling-down");
    }
    if (window.scrollY == 0) {
      this.appHeader.classList.remove("js-scrolling");
    }
  }

  checkScrollDirection() {
    if (window.scrollY > this.previusScrollY) {
      this.scrollDirection = "down";
    } else {
      this.scrollDirection = "up";
    }
    this.previusScrollY = window.scrollY;
  }
}

export default StickyHeader;
