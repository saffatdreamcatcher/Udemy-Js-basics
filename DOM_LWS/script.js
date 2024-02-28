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

let lastItem = document.querySelector(".item:last-child");
console.log(lastItem);
lastItem.style.color = 'yellow';

// let lastItems = document.querySelectorAll('.item:last-child');
// // console.log(lastItems);

// for (let element of lastItems)
// {
//   element.style.color = 'red';
// }

