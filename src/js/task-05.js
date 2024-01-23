const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (value) => {
  textOutput.textContent = textInput.value.trim() || "Anonymous";
});
