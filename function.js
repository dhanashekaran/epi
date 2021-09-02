const scriptURL =
"https://script.google.com/macros/s/AKfycbwAIZHWfRbEKaGSXYlWqMc9Jg9dDmVeX-dG8JwgJFWM42PsaPnS4y0t2G9YfX0Rj1uU/exec";
const form = document.forms["quotation_form"];

form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
  (response) => console.log("Success!", response),
  alert("Thanks for your interest 😃, We will contact you ASAP."),
  form.reset()
);
// .catch(error => console.error('Error!', error.message), alert("Error"))
});