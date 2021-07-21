const navbar = document.querySelector(".navigation");
const navbarHeight = navbar.getBoundingClientRect().height;
const btnNavbars = document.querySelector(".nav-menu-bars");

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("white");
  } else {
    navbar.classList.remove("white");
  }
});

// nav bar li에 있는 버튼들 이동
const navbarButtons = document.querySelectorAll(".nav-menu li");

navbarButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
      return;
    }

    scrollIntoView(link);
  });
});

// Home의 아래 버튼 (about으로 감)
const btnGotoAbout = document.querySelector(".down-btn");

btnGotoAbout.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }

  scrollIntoView(link);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
