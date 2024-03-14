const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
const phoneError = document.getElementById("phone-error");

let isValid = false;
let passwordsMatch = false;


function validateForm() {
  // Use HTML constraint API to check form validity
  isValid = form.checkValidity();
  // If the form isn't valid
  console.log(isValid);
  if (!isValid) {
    console.log("check");
    // Style main message for an error
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    // phoneError.innerHTML = "Please enter valid phone number";
    return;
  }
  // Check to see if both password fields match
  if (password1El.value === password2El.value) {
    // If they match, set value to true and borders to green
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    // If they don't match, border color of input to red, change message
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    // Style main message for success
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFromData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
}

function processFromData(e) {
  e.preventDefault();
  // Validate form
  validateForm();
  console.log("scasc");
  // Submit Form if Valid
  if (isValid && passwordsMatch) {
    storeFromData();
  }
}

// Event Listener
form.addEventListener("submit", processFromData);
