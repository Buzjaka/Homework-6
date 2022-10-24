// Challenge 1
// Log li with id special
let countryWithId = document.querySelector("#special");
console.log(countryWithId);

// Challenge 2
// Log all li with class of country
let allCountryLi = document.querySelectorAll(".country");
console.log(allCountryLi);

// Challenge 3
// Add class special to the li with id special

countryWithId.classList.add("special");
//console.log(allCountryLi);

// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)
countryWithId.innerHTML = "Ukraine 🇺🇦";
