const formInput = document.querySelector("#validation-input");
const dataLength = Number(formInput.dataset.length);

formInput.addEventListener("input", () => {
  if (formInput.value.length === dataLength) {
    formInput.classList.replace("invalid", "valid");
  } else {
    formInput.classList.add("invalid");
  }
});
