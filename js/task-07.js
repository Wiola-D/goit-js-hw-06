const formInput = document.querySelector("#control");
formInput.addEventListener("input", changeFontSize);
text.style.fontSize = formInput.value + "px";

function changeFontSize() {
  text.style.fontSize = formInput.value + "px";
}
