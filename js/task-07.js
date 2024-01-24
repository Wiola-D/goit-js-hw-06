/*const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeInput.addEventListener("input", () => {
  text.style.fontSize = rangeInput.value;
});
*/
const formInput = document.querySelector("#control");
formInput.addEventListener("input", changeFontSize);

function changeFontSize() {
  text.style.fontSize = formInput.value + "px";
}
