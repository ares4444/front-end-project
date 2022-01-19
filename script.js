import {key} from "./keys.js";

const inputBox = document.getElementById("input");
const searchButton = document.getElementById("button");
const audioObj = new Audio('https://api.deezer.com/album/258065882/tracks');
document.getElementById("results").appendChild(audioObj);
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let musicSearch = inputBox.value;
    console.log(musicSearch);

    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${musicSearch}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": 
        `${key}`
	}
})
.then((response) => response.json())
//  .then(data => {
//  	showResults(data.Search)})

.catch((error) => {
    console.log('Error:', error)
})

.then(data => {
	console.log(data);
    const dataResults = data.Search;
dataResults.forEach(results => {
    console.dir(results)
      let item = document.createElement("div");
      item.innerHTML = `<div class="card">
      <audio controls src="${results.preview}" type="module"></audio></div>`;
    //   document.getElementById("card-group").appendChild(item);
    });
   })
});
