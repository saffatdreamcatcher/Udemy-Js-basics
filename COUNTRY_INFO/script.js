const loadCountry = () => {
  document.getElementById("loader").style.display = "block";
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((countries) => {
      if (countries) {
        document.getElementById("loader").style.display = "none";
        displayCountries(countries);
      }
    });
};
const displayCountries = (countries) => {
  console.log("COUNTRIES:", countries);
  const countryGlobal = document.getElementById("country");
  countryGlobal.innerHTML = "";

  countries.map((country) => {
    const languages = country.languages;
    console.log(languages);
    const div = document.createElement("div");
    div.classList.add("col-lg-3");

    const keys = Object.keys(languages);
    let languagesCheck;
    if (keys.length > 2) {
      console.log("languagesCheck:", languages);
      languagesCheck = `<h6>Languages: ${keys
        .slice(0, 3)
        .map((key) => languages[key])}, ...</h6>`;
    } else {
      languagesCheck = `<h6>Languages: ${keys.map(
        (key) => languages[key]
      )}</h6>`;
    }

    div.innerHTML = `<div class="card">
                    <div class="image-container" style = "height:260px;">
                    <img src="${country.flags.png}" class="w-100" alt="">
                    </div>
                    <div class= "about">
                    <h5>${country.name.common}</h5>
                    <h6>Official Name : ${country.name.official}</h6>
                    <h6>Capital : ${country.capital}</h6>
                     <h6>${languagesCheck}</h6>
                     </div>
                    </div>`;
    countryGlobal.appendChild(div);
  });
};

const searchData = () => {
  document.getElementById("loader").style.display = "block";
  const searchByName = document.getElementById("search");
  const countryName = searchByName.value;

  const url = `https://restcountries.com/v3.1/name/${countryName}`;

  fetch(url)
    .then((response) => response.json())
    .then((country) => {
      document.getElementById("loader").style.display = "none";
      displayCountries(country);
    });
};
document.getElementById("search").addEventListener("keydown", searchData);

loadCountry();
