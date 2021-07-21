const navbar = document.querySelector(".navigation");
const navbarHeight = navbar.getBoundingClientRect().height;
const btnNavbars = document.querySelector(".nav-menu-bars");

document.addEventListener("scroll", () => {
  console.log(navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("white");
  } else {
    navbar.classList.remove("white");
  }
});
