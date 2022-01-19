import {key} from "./keys.js";

const inputBox = document.getElementById("input");
const searchButton = document.getElementById("button");
//const audioObj = new Audio('https://api.deezer.com/album/258065882/tracks');
//document.getElementById("results").appendChild(audioObj);
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
//  .then(responseData => {
//  	showResults(responseData.Search)})
.then(response => {
	console.log(response);
})
.catch((error) => {
    console.log('Error:', error)
})
});

function showResults(results) {
    console.log(results)
    results.forEach(result => {
      let item = document.createElement("div");
      item.innerHTML = `<div class="card">
      <audio src="${result.preview}">
      <h1>Audio Stuff</h1>
    </div>
    </div>
    <br>` ;
      document.getElementById("card-group").appendChild(item);
    });
    
   };
