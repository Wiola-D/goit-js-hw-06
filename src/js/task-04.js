const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const endValue = document.querySelector("#value");

let counter = 0;

function plusCounter() {
  const result = (counter += 1);
  endValue.textContent = counter;
}
function minusCounter() {
  const result = (counter -= 1);
  endValue.textContent = counter;
}

incrementBtn.addEventListener("click", plusCounter);
decrementBtn.addEventListener("click", minusCounter);
