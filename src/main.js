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
