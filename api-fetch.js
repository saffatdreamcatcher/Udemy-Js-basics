const customLoader = document.getElementById("loading")



function loadApiData() {
  customLoader.style.display = "block"
  console.log("callllll");
  setTimeout(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
  customLoader.style.display = "none"  
  displayData(data)
}) 
.catch( error => {
  customLoader.style.display = "none"  
  alert(error)
  console.log(error);
})
}, 3000 );
}

function displayData(data) {

  const divLoading = document.getElementById('loading');

  const div = document.getElementById('divTag');
  data.map(user => {
    const p = document.createElement('p');
    p.innerText = user.title;
    div.appendChild(p);
  });

 
  
  //Using for loop

  // const div = document.getElementById('divTag');
  
  // for (let i = 0; i <= data.length; i++)
  // {
  //   console.log('div:', data[i]);

  //   const p = document.createElement('p');
  //   p.innerText = data[i].title;
  //   div.appendChild(p);
  // }

   
 

  //Using forEach loop

  // const div = document.getElementById('divTag');
  
  // data.forEach ( para => {
  //   console.log('div:', para);
  //   const p = document.createElement('p');
  //   p.innerText = para.title;
  //   div.appendChild(p);
  // });

}




