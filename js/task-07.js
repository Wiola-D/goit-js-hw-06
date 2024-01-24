const formInput = document.querySelector("#control");
formInput.addEventListener("input", changeFontSize);

function changeFontSize() {
  text.style.fontSize = formInput.value + "px";
}
