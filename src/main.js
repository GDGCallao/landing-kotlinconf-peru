document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {

      event.preventDefault();

      navLinks.forEach((link) => link.classList.remove("active"));

      this.classList.add("active");

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// Close and open burger menu
const burgerMenu = document.querySelector("#burgerMenu");
const header = document.querySelector("#header");
const showList = document.querySelector("#showList");

burgerMenu.addEventListener("click", () => {
  header.classList.toggle("showMenu");
  showList.classList.toggle("openList");
  burgerMenu.classList.toggle("change");
});