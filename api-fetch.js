function loadApiData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => displayData(data)) 
}

function displayData(data) {
  const div = document.getElementById('divtag');
  
  data.map(user => {
    const p = document.createElement('p');
    p.innerText = user.title;
    div.appendChild(p);
  });
}