import { key } from "./keys.js";

const inputBox = document.getElementById("search-input");
const searchButton = document.getElementById("submit-btn");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  let musicSearch = inputBox.value;
  console.log(musicSearch);

  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${musicSearch}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": `${key}`,
    },
  })
    .then((response) => response.json())
    
    .then((response) => {
      console.log(response);
    })
    .then((responseData) => {
      showResults(responseData.Search);
     });
//     .catch((error) => {
//       console.log("Error:", error);
//     });
// });

function showResults(results) {
  console.log(results);
  results.map((result) => {
    let item = document.createElement("div");
    item.innerHTML = `<div class="card">
      <audio src="${result.preview}"></audio>
      <div class="card-body">

      </div>
    </div>
    <br>`;
  });
  document.getElementById("results").appendChild(item);
}});

// document.querySelector('#search-btn').addEventListener('keypress', function (e) {
//   if (e.key === 'Enter') {
//     // code for enter
//   }
// });