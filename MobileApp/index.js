import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"  
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://realtime-database-b4350-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app)
const moviesInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function() {
  let inputValue = inputFieldEl.value;

  push(moviesInDB, inputValue);
  clearInputFieldEl();
  

  if (inputValue === "") {
    console.log("Input is blank. Please enter a value.");
  } else {
    // console.log("Input value: ", inputValue);
    console.log(`${inputValue} added to database`)
  }
  appendItemToshoppingListEl(inputValue);

})

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function appendItemToshoppingListEl(itemValue) {
  shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
}


// Firebase data implementation

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"  
// import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//   databaseURL: "https://playground-d52a0-default-rtdb.asia-southeast1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings);
// const database = getDatabase(app)
// const moviesInDB = ref(database, "movies")

// const inputFieldEl = document.getElementById("input-field");
// const addButtonEl = document.getElementById("add-button");

// addButtonEl.addEventListener("click", function() {
//   let inputValue = inputFieldEl.value;

//   push(moviesInDB, inputValue);

//   if (inputValue === "") {
//     console.log("Input is blank. Please enter a value.");
//   } else {
//     // console.log("Input value: ", inputValue);
//     console.log(`${inputValue} added to database`)
  
//   }

// })
