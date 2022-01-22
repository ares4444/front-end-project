import { key } from "./keys.js";
import { fetchData } from "./fetchData.js";
const results = document.getElementById("results");


const musicSearch = localStorage.getItem("artist");
console.log(musicSearch);
// searchButton.addEventListener("click", (e) => {}

fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${musicSearch}`, {
  method: "GET",
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": `${key}`,
  },
})
  .then((response) => response.json())
  //  .then(data => {
  //  	showResults(data.Search)})

  .catch((error) => {
    console.log("Error:", error);
  })

  .then((fetchResults) => {
    console.dir();
    console.log(fetchResults.data);
    const { data } = fetchResults;
    data.map((song) => {
      let songCard = `<div id="music-container" class="music-container col-6 col-md-2 col-sm-1">
      <div class="music-info">
      </div>
      <div class="card" style="width: 18rem;">
  	<img class="card-img-top" src="${song.album.cover}" alt="Card image cap">
  	<div class="card-body">
	  <div>${song.title}</div>
	  <br>
	  <audio controls src="${song.preview}" id="audio" style="width: 100%"></audio>
  	</div>
	</div>`;
      results.innerHTML += songCard;
    });
    
  });
