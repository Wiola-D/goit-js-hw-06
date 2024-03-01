const input = document.querySelector("input");
const createElement = document.querySelector("[data-create]");
const destroyElement = document.querySelector("[data-destroy]");
const container = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
input.value = 1;

function createBox() {
  const startSize = 30;
  const stepSize = 10;
  for (let i = 0; i < input.value; i++) {
    const box = document.createElement("div");
    const randomColor = getRandomHexColor();

    box.style.backgroundColor = randomColor;
    box.style.width = `${startSize + stepSize * i}px`;
    box.style.height = `${startSize + stepSize * i}px`;
    box.classList.add("divBox");

    container.append(box);
  }
}

function destroyBox() {
  const divs = document.querySelectorAll(".divBox");
  divs.forEach((div) => {
    div.remove();
  });
}
createElement.addEventListener("click", () => {
  destroyBox();
  createBox();
});
destroyElement.addEventListener("click", () => {
  destroyBox();
});
