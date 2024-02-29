// console.log(typeof(document.body));
// console.dir(document.body);
// console.log(document);

// let headerElement = document.getElementById('header');
// headerElement.textContent = 'playing with DOM';
// headerElement.innerText = 'playing with DOM LWS';
// headerElement.style.color = 'red';
// headerElement.style.fontSize = '50px';

// console.log(document.getElementsByClassName('item'));

//WHEN WE MODIFY EVERY UL ELEMENT: just use getElementsByClassName
// let items = document.getElementsByClassName('item');
// for (let i = 0; i < items.length; i++)
// {
//   items[i].style.color = 'blue';
// }

//WHEN WE MODIFY Specefic UL ELEMENT: just use getElementsByID
// let itemUL = document.getElementById('items');
// let items = itemUL.getElementsByClassName("item");
// for (let i = 0; i < items.length; i++) {
//   items[i].style.color = "blue";
// }

// every element using tag name
// let items = document.getElementsByTagName('li');
// console.log(items);

//Query Selector
// let header = document.querySelector('.header');
// console.log(header);

// let newTask = document.querySelector("#new-task");
// console.log(newTask);

// let lastItem = document.querySelector(".item:last-child");
// console.log(lastItem);
// lastItem.style.color = 'yellow';

// let lastItems = document.querySelectorAll('.item:last-child');
// // console.log(lastItems);

// for (let element of lastItems)
// {
//   element.style.color = 'red';
// }

//PARENT/CHILD RELATION
// const grandparent = document.querySelector(".todo-list");
// // const parent = document.querySelector('#items');
// const parent = grandparent.children;
// // const children = parent.children;
// const children = parent[1].children;

// console.log(children);

//Granparent to direct children
// const grandparent = document.querySelector(".todo-list");
// const children = grandparent.querySelectorAll('.item');

// console.log(children);

// //CHILDREN TO PARENT
// const children = document.querySelector('.item');
// const parent = children.parentElement;
// console.log(parent);

// //CHILDREN TO GRANDPARENT
// const children = document.querySelector('.item');
// const grandparent = children.closest('.todo-list');
// console.log(grandparent);

//SIBLINGS
// const childrenOne = document.querySelector('.item');
// const childrenTwo = childrenOne.nextElementSibling;
// childrenTwo.style.color = "orange";
// console.log(childrenTwo);

// const childrenTwo = document.querySelector(".item").nextElementSibling;
// const childrenOne = childrenTwo.previousElementSibling;
// childrenOne.style.color = "violet";
// console.log(childrenTwo);

//creating an element
// const divElement = document.createElement('div');

// divElement.className = 'red';
// divElement.setAttribute('id', 'red');
// divElement.setAttribute('title', 'Red Div');

// const container = document.querySelector('.todo-list');
// const h2Element = container.querySelector('h2');
// container.insertBefore(divElement, h2Element);
// container.appendChild(divElement);

// const a = container.appendChild(divElement);
// console.log(a);

// const b = container.append(divElement);
// console.log(b);

// const b = container.append(divElement, document.createElement('p'), 'hello world');
// console.log(b);

//event listeners
// const headerElement = document.querySelector('#header');
// // headerElement.addEventListener('click', (event) => {
// //   console.log(event);
// headerElement.addEventListener("mouseenter", (event) => {
//   console.log(event);
// });

// const inputElement = document.querySelector('input[type="text"]');

// inputElement.addEventListener('cut', (event) => {
//   console.log(event);
// });

// const formElement = document.querySelector('form');

// formElement.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event);
// });

// select elements & assign them to variables
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

// functions
let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";

  // listItem.appendChild(checkBox);
  // listItem.appendChild(label);

  listItem.append(checkBox, label);

  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";
  // bind the new list item to the incomplete list
  bindInCompleteItems(listItem, completeTask);
};

let completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem);
  bindCompleteItems(listItem, deleteTask);
};

let deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let bindInCompleteItems = function (taskItem, checkboxClick) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

let bindCompleteItems = function (taskItem, deleteButtonClick) {
  let deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteButtonClick;
};

for (let i = 0; i < todoUl.children.length; i++) {
  bindInCompleteItems(todoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
