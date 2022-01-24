import { songsKey } from "./keys.js";
// import { fetchData } from "./fetchData.js";
const results = document.getElementById("results");
const musicSearch = localStorage.getItem("artist");
console.log(musicSearch);
const artistSearch = localStorage.getItem("artist")



window.addEventListener('DOMContentLoaded', async (event) => {
	fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${musicSearch}`, {
  method: "GET",
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": `${songsKey}`,
  	},
	})
  .then((response) => response.json())
  .catch((error) => {
    console.log("Error:", error);
  })
  .then((fetchResults) => {
    console.dir();
    console.log(fetchResults.data);
    const { data } = fetchResults;
    data.map((song) => {
      let songCard = `<div id="music-container" class="music-container">
      <div class="card deezerApi"  style="width: 18rem;">
		<img class="card-img-top" src="${song.album.cover_medium}" alt="Card image cap">
		<div class="card-body">
      <div id="songTitle">${song.title}</div>
      <br>
      <audio controls src="${song.preview}" id="audio" style="width: 100%"></audio>
    </div>
    </div>
		</div>`;
      		results.innerHTML += songCard;
    })
    })
});
  
	  fetch(`https://api.lyrics.ovh/v1/${artistSearch}/${musicSearch}`)
    .then(response => response.json())
		.then(lyrics => {
      console.log(lyrics);
    })
    .then((fetchLyrics) => {
			console.log(fetchLyrics.data);
			const {data} = fetchLyrics;
			data.map((lyrics) => {
				let lyricCard = `<div id="lyric-container" class="card">
				<div class="lyric-info">
				</div>
				<p>${lyrics}</p>
				</div>
			  </div>`
			  geniusApi.innerHTML += lyricCard;
			})
		})
  })
