const scriptURL ="https://script.google.com/a/macros/selfinstaller.com/s/AKfycby60nttx9cVVo60moynDBl3vX7rFoCnWbP3wyzSQFqC01CJWWwhOn4Mxd4ISX7UhM2c/exec";
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