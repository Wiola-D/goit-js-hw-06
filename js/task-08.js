const registerForm = document.querySelector(".login-form");

let formData = {};

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email.trim() === "" || password.trim() === "") {
    return alert("Wszystkie pola powinny zostać wypełnione!");
  }

  formData.email = email;
  formData.password = password;

  console.log(formData);

  form.reset();
}
