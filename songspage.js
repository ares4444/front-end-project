import { songsKey } from "./keys.js";
// import { fetchData } from "./fetchData.js";
const results = document.getElementById("results");
const lyricsDIV = document.getElementById("lyricsDIV");
const artistName = document.getElementById("artistName");
const songName = document.getElementById("songName");

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
  
	  fetch(`https://private-amnesiac-3503f-lyricsovh.apiary-proxy.com/v1/flyleaf/im%20so%20sick`)
    	.then(response => response.json())
		.catch((error) => {
		console.log("Error:", error);
	 	 })
		  .then(data => {
      		console.log(data);
    	})
    	.then((fetchLyrics) => {
			console.log(fetchLyrics.data);
			const {data} = fetchLyrics;
			data.map((lyrics) => {
				let lyricCard = `<div id="lyric-container" class="lyric-container">
				<div class="lyric-info">
				<p>${lyrics.lyrics}</p>
				</div>
			  </div>`
			  lyricsDIV.innerHTML += lyricCard;
			})
		})
