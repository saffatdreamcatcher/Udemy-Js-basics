const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((countries) => displayCountries(countries));
};
const displayCountries = (countries) => {
  // console.log("COUNTRIES:", countries);
  const countryGlobal = document.getElementById("country");
  countryGlobal.innerHTML = "";

  countries.map((country) => {
    const languages = country.languages;
    console.log(languages);
    const div = document.createElement("div");
    div.classList.add("col-lg-4");
    div.classList.add("col-lg-4");
    div.classList.add("col-lg-4");
    div.innerHTML = `<div class="card">
                    <div class="d-flex justify-content-center align-items-center">
                    <img src="${country.flags.png}" width="100%" alt="">
                    </div>
                    <h5>${country.name.common}</h5>
                    <h6>Official Name : ${country.name.official}</h6>
                    <h6>Capital : ${country.capital}</h6>
                    <h6>Lnaguages: ${Object.keys(languages).map(
                      (key) => languages[key]
                    )}</h6>
                    </div>`;
    countryGlobal.appendChild(div);
  });
};

loadCountry();
