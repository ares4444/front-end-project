import {key} from "./keys.js";
console.log(key);
console.log("hello");

console.log(localStorage.getItem("artist"));

const musicSearch = localStorage.getItem("artist");
console.log(musicSearch);
// searchButton.addEventListener("click", (e) => {}

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
    console.dir()
	console.log(data);
    const dataResults = data.Search;
// dataResults.forEach(results => {
//     console.dir(results)
//       let item = document.createElement("div");
//       item.innerHTML = `<div class="card">
//       <audio controls src="${results.preview}" type="module"></audio></div>`;
//     //   document.getElementById("card-group").appendChild(item);
//     });
   })

