document.addEventListener("DOMContentLoaded", () => {
  button = document.createElement("button");
  button.textContent = "Enter Age";
  document.body.appendChild(button);
  button.addEventListener("click", () => {
    let age = prompt("enter your age"); // init the propmt system
    if (age == null) alert("no age entered"); // fallback for the cancellation
    else alert("your age is " + age); // fallback for the truthy value
  });
  let place = confirm("Do you live in Egypt?");
  alert(place);
});
