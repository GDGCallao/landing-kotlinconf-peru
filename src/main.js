// Add active class
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav_list a");
  const sections = document.querySelectorAll("section");

  function removeActiveClasses() {
    navLinks.forEach((link) => link.classList.remove("active"));
  }

  function addActiveClass(link) {
    removeActiveClasses();
    link.classList.add("active");
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {

      event.preventDefault();

      addActiveClass(this);

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

// Change active class when scrolling into sections
  function highlightNavOnScroll() {
    let scrollPosition = window.scrollY + 70;

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        let currentId = section.getAttribute("id");
        let currentLink = document.querySelector(
          `.nav_list a[href="#${currentId}"]`
        );
        addActiveClass(currentLink);
      }
    });
  }

  window.addEventListener("scroll", highlightNavOnScroll);

  highlightNavOnScroll();
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
