const btn = document.querySelector(".change-color");
const bg = document.querySelector("body");
const span = document.querySelector(".color");

btn.addEventListener("click", changeColor);

function changeColor() {
  span.textContent = getRandomHexColor();
  bg.style.background = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
