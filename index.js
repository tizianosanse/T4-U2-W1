/*--------------------------------------------------------------- Scroll Animation -----------------------------------------------------------*/

const nav = document.querySelector("header nav");
const button = document.querySelector("header .button1");

function checkScrollPosition() {
  const firstArticlesSectionHeight = document.querySelector(".button2").offsetTop;

  const scrollPosition = window.scrollY;

  if (scrollPosition >= firstArticlesSectionHeight) {
    nav.classList.add("nav-white");
    button.classList.add("green-button");
  } else {
    nav.classList.remove("nav-white");
    button.classList.remove("green-button");
  }
}

window.addEventListener("scroll", checkScrollPosition);

/*--------------------------------------------------------------- M Animation -----------------------------------------------------------*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animateMs() {
  const letters = document.querySelectorAll(".m svg text, .m svg path");
  const visibleDuration = 80;
  const invisibleDuration = 77;

  function showM(index) {
    if (letters[index]) {
      letters[index].style.opacity = 1;
      setTimeout(() => hideM(index), visibleDuration);
    }
  }

  function hideM(index) {
    if (letters[index]) {
      letters[index].style.opacity = 0;
      setTimeout(() => showM(getRandomInt(0, letters.length - 1)), invisibleDuration);
    }
  }

  showM(getRandomInt(0, letters.length - 1));
}

document.addEventListener("DOMContentLoaded", animateMs);
