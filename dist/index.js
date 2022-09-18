const $menuItems = document.querySelector("#menu");
const $btnMenu = document.getElementById("btn-menu");
const $achors = document.querySelectorAll("#menu a");
console.log($achors);

$btnMenu.addEventListener("click", (e) => {
  $btnMenu.firstElementChild.classList.toggle("hidden");
  $btnMenu.lastElementChild.classList.toggle("hidden");
  $menuItems.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!e.target.matches("#menu a")) return false;
  $btnMenu.firstElementChild.classList.toggle("hidden");
  $btnMenu.lastElementChild.classList.toggle("hidden");
  $menuItems.classList.add("hidden");
});

window.addEventListener("scroll", (e) => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  //console.log(scrollTop);
  if (scrollTop > 0) {
    $btnMenu.classList.add("hidden");
  } else {
    $btnMenu.classList.remove("hidden");
  }
});

const d = document;

const $nextBtn = d.querySelector("#right"),
  $prevBtn = d.querySelector("#left"),
  $slides = d.querySelectorAll("#slider-slide");

let i = 0;

d.addEventListener("click", (e) => {
  if (e.target === $prevBtn) {
    e.preventDefault();
    $slides[i].classList.add("hidden");
    i--;
  }
  if (i < 0) i = $slides.length - 1;

  $slides[i].classList.remove("hidden");

  if (e.target === $nextBtn) {
    e.preventDefault();
    $slides[i].classList.add("hidden");
    i++;
  }
  if (i >= $slides.length) i = 0;

  $slides[i].classList.remove("hidden");
});
