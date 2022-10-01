const $menuItems = document.querySelector("#menu");
const $btnMenu = document.getElementById("btn-menu");
const $achors = document.querySelectorAll("#menu a");

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
    $menuItems.classList.add("hidden");
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

const $form = d.querySelector("#contact-form"),
  $loader = d.querySelector("#contact-form-loader"),
  $response = d.querySelector("#contact-form-response");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  $loader.classList.remove("hidden");

  fetch("https://formsubmit.co/ajax/amr89.dev@gmail.com", {
    method: "POST",
    body: new FormData(e.target),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      $response.classList.remove("hidden");
      $form.reset();
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $response.textContent = `Error: ${err.status}: ${message}`;
    })
    .finally(() => {
      $loader.classList.add("hidden");
      setTimeout(() => {
        location.hash = "#close";
        $response.classList.add("hidden");
      }, 3000);
    });
});
