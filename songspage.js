import { songsKey } from "./keys.js";
// import { fetchData } from "./fetchData.js";
const results = document.getElementById("results");
const lyricsDIV = document.getElementById("lyricsDIV");
const artistName = document.getElementById("artistName");
const songName = document.getElementById("songName");

const musicSearch = JSON.parse(localStorage.getItem("musicSearch"));
console.log(musicSearch);
console.log(musicSearch.artist);
console.log(musicSearch.song);

window.addEventListener('DOMContentLoaded', async (event) => {
	let songResults = [];
	await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${musicSearch.artist}`, {
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
	songResults = fetchResults.data
    const { data } = fetchResults;
    data.map((song) => {
		let i = 0;
		if(i < 26) {
			i++;
		let songCard = `<div id="music-container" class="music-container">
      <div class="card deezerApi"  style="width: 18rem;">
		<img class="card-img-top" src="${song.album.cover_medium}" alt="Card image cap">
		<div class="card-body">
      <div id="songTitle">${song.title}</div>
      <br>
      <audio controls src="${song.preview}" id="audio" style="width: 100%"></audio>
    </div>
	<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button id="accordionBtn" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div id="accordBody${i}" class="accordion-body"></div>
    </div>
  </div>
  	</div>
		</div>
		</div>`;
			  results.innerHTML += songCard;
			
    	}})
		//console.log(songArray)
		return fetchResults;
		
    })
	console.log(songResults);
	const accordBody = document.querySelectorAll('[id^="accordBody"]')
	console.log(accordBody);
	songResults.map(song => {
		console.log(song);
		let j = 0;
		fetch(`https://private-amnesiac-3503f-lyricsovh.apiary-proxy.com/v1/${song.artist.name}/${song.title}`)
		.then(response => response.json())
		.catch((error) => {
		console.log("Error:", error);
		})
  		.then(data => {
	  	// let lyricCard = `<div id="lyric-container" class="card">
		// 		<div class="card-body">
		// 		<p class="card-text">${data.lyrics}</p>
		// 		</div>
		// 	  </div>`
			  accordBody[j].innerHTML = data.lyrics.replace(new RegExp("\n", "g"),"<br>");
				j++;
			})
	
    })
});
  

    	// .then((fetchLyrics) => {
		// 	console.log(data.lyrics);
		// 	const {data} = fetchLyrics;
		// 	data.map((lyrics) => {
				
		// 	})
		// });


    