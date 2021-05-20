import "./assets/styles/main.scss";

import MobileMenu from "./scripts/MobileMenu";
import StickyHeader from "./scripts/StickyHeader";
import ImgSlider from "./scripts/ImgSlider";
import RevealOnScroll from "./scripts/RevealOnScroll";

new MobileMenu("menu-open", "menu-close", ".l-mobile-menu");

new StickyHeader();

new ImgSlider("img-slider");

new RevealOnScroll();

// swiper

const swiper = document.querySelector(".c-swiper").children[0];
const swiperLength = swiper.children.length;

swiper.style.setProperty("--n", swiperLength);

swiper.addEventListener("touchstart", startM);
swiper.addEventListener("mousedown", startM);

swiper.addEventListener("touchmove", dragM);
swiper.addEventListener("mousemove", dragM);

swiper.addEventListener("touchend", moveM);
swiper.addEventListener("mouseup", moveM);

let xStart = null;
let swipeStarted = false;
let i = 0;

// mouse and touch included
function mergeClickTouch(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}

function getSize(el) {
  return el.getBoundingClientRect().width;
}

function startM(e) {
  xStart = mergeClickTouch(e).clientX;
  swiper.classList.remove("js-isSmooth");
  swipeStarted = true;
}

function dragM(e) {
  e.preventDefault();
  if (swipeStarted) {
    swiper.style.setProperty(
      "--tx",
      `${Math.round(mergeClickTouch(e).clientX) - xStart}px`
    );
  }
}

function moveM(e) {
  if (swipeStarted) {
    let difference = mergeClickTouch(e).clientX - xStart;
    let direction = Math.sign(difference) > 0 ? "left" : "right";

    // setting 20% treshold for swiper
    const shouldSwipe =
      Math.abs(difference) / Math.round(getSize(swiper) / swiperLength) > 0.2;

    // go right
    if (i < swiperLength - 1 && direction === "right" && shouldSwipe) {
      swiper.style.setProperty("--i", ++i);
      swiper.style.setProperty("--tx", "0px");
      swiper.classList.add("js-isSmooth");
      swipeStarted = false;
    }

    // go left
    else if (i > 0 && direction === "left" && shouldSwipe) {
      swiper.style.setProperty("--i", --i);
      swiper.style.setProperty("--tx", "0px");
      swiper.classList.add("js-isSmooth");
      swipeStarted = false;
    } else {
      // no next slide
      swiper.classList.add("js-isSmooth");
      swiper.style.setProperty("--tx", "0px");
      swipeStarted = false;
    }
  }
}
