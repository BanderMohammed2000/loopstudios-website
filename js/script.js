const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

/* OR */

// let menuBtn = document.getElementById("menu-btn"),
//   menu = document.getElementById("menu");
// menuBtn.addEventListener("click", () => {
//   menuBtn.classList.toggle("open");
//   menu.classList.toggle("hidden");
//   menu.classList.toggle("flex");
// });
