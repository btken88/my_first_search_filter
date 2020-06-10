const searchParam = new URLSearchParams(window.location.search)
const name = searchParam.get('name')

const baseURL = "http://localhost:3000";
let dogsURL = `${baseURL}/dogs`;
if (name) {
  dogsURL = `${dogsURL}?name=${name}`
}

console.log(name)

console.log("JavaScript loaded");


const dogsSection = document.querySelector("section");

fetch(dogsURL)
  .then(parseJSON)
  .then(displayDogs);

function displayDogs(dogs) {
  dogs.forEach(showDog);
}

function showDog(dog) {
  const dogCard = document.createElement("div");

  const name = document.createElement("h2");
  name.textContent = dog.name;

  const age = document.createElement("p");
  age.textContent = `${dog.age} years old`;

  dogCard.append(name, age);
  dogsSection.append(dogCard);
}

function parseJSON(response) {
  return response.json();
}
