function loadApiData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => displayData(data)) 
}

function displayData(data) {
  const div = document.getElementById('divTag');
  data.map(user => {
    const p = document.createElement('p');
    p.innerText = user.title;
    div.appendChild(p);
  });
  

  // const div = document.getElementById('divTag');
  
  // for (let i = 0; i <= data.length; i++)
  // {
  //   console.log('div:', data[i]);
  // }

  //   const p = document.createElement('p');
  //   p.innerText = user.title;
  //   div.appendChild(p);
 
}

