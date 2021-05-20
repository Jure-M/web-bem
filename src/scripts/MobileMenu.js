class MobileMenu {
  constructor(openElement, closeElement, menuElement) {
    this.bodyEl = document.body;
    this.openBtn = document.getElementById(`${openElement}`);
    this.closeBtn = document.getElementById(`${closeElement}`);
    this.mobileMenu = document.querySelector(`${menuElement}`);
    this.events();
  }

  events() {
    this.openBtn.addEventListener("click", this.openMenu.bind(this));
    this.closeBtn.addEventListener("click", this.closeMenu);
  }

  openMenu() {
    this.bodyEl.classList.add("js-noScroll");
    this.mobileMenu.classList.add("moveIn");
    setTimeout(() => {
      this.mobileMenu.classList.add("isOpen");
      this.mobileMenu.classList.remove("moveIn");
    }, 10);
  }

  closeMenu = () => {
    this.bodyEl.classList.remove("js-noScroll");
    this.mobileMenu.classList.remove("isOpen");
    this.mobileMenu.classList.add("moveOut");
    setTimeout(() => {
      this.mobileMenu.classList.remove("moveIn");
      this.mobileMenu.classList.remove("moveOut");
    }, 400);
  };
}

export default MobileMenu;
