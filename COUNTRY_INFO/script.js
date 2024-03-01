const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((countries) => displayCountries(countries));
};
const displayCountries = (countries) => {
  console.log("COUNTRIES:", countries);
  const countryGlobal = document.getElementById("country");
  countryGlobal.innerHTML = "";

  countries.map((country) => {
    console.log(country);
    const div = document.createElement("div");
    div.classList.add("col-lg-4");
    div.classList.add("col-lg-4");
    div.classList.add("col-lg-4");
    div.innerHTML = `<div class="card">
                    <div class="d-flex justify-content-center align-items-center">
                    <img src="${
                      country.flag ? country.flags.png : "N/A"
                    }" width="100%" alt="">
                    </div>
                    <h5>${country.name.common}</h5>
                    <h6>Official Name : ${country.name.official}</h6>
                    <h6>Capital : ${country.capital}</h6>
                    <h6>Language : ${country.languages.tur}</h6>
                    </div>`;
    countryGlobal.appendChild(div);
  });
};

loadCountry();
