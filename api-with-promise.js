const customLoader = document.getElementById("loading");

function prom() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {

        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

function loadApiData() {
  customLoader.style.display = "block";

  setTimeout(() => {
    prom()
      .then(data => {
        customLoader.style.display = "none";
        displayData(data);
      })
      .catch(error => {
        customLoader.style.display = "none";
        alert(error);
        console.log(error);
      });
  }, 3000);
}

function displayData(data) {
  const div = document.getElementById('divTag');

  data.forEach(user => {
    const p = document.createElement('p');
    p.innerText = user.title;
    div.appendChild(p);
  });
}
