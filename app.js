let links = document.querySelectorAll(".links");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const ul = document.querySelector(".nav-links-container");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
  ul.classList.toggle("active");
});
