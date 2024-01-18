const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", function() {
  let inputValue = inputFieldEl.value;

  if (inputValue === "") {
    console.log("Input is blank. Please enter a value.");
  } else {
    console.log("Input value: ", inputValue);
  
  }

})
