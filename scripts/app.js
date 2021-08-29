const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    // console.log(countries);
    // for (const country of countries) {
    //     console.log(country);
    // }
    const getCountryDiv = document.getElementById('country');
    //forEach - we are running only for Array
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('div-style');
        div.innerHTML = `
        <img width="150px" src="${country.flag}">
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button class="btn-style" onclick="loadCountryName('${country.name}')">Details</button>
        <button class="btn-style" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
        `;
        getCountryDiv.appendChild(div);
    });
}

const loadCountryName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    console.log(country);
    const countryDiv = document.getElementById('display-country');
    countryDiv.classList.add('box-style');
    countryDiv.innerHTML = `
    <h3>Country Details</h3>
    <img width="250px" src="${country.flag}">
    <h4>${country.name}</h4>
    <h6>Capital: ${country.capital}</h6>
    <h6>Native Name: ${country.nativeName}</h6>
    <h6>Population: ${country.population}</h6>
    <h6>Region: ${country.region}</h6>
    <h6>Subregion: ${country.subregion}</h6>
    `;
}
