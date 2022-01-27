import { songsKey } from "./keys.js";
// import { fetchData } from "./fetchData.js";
const results = document.getElementById("results");
// const lyricsDIV = document.getElementById("lyricsDIV");
const artistName = document.getElementById("artistName");
const songName = document.getElementById("songName");
let index = 0;
const musicSearch = JSON.parse(localStorage.getItem("musicSearch"));
//console.log(musicSearch);
////console.log(musicSearch.artist);
console.log(musicSearch.song);
let counter = 0

window.addEventListener('DOMContentLoaded', async (event) => {

	//promise1 = 
	const fetchSongs = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${musicSearch.artist}`, {
		method: "GET",
		headers: {
		  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		  "x-rapidapi-key": `${songsKey}`,
			},
		  }).then((response) => response.json())
		//   .then(songData => {
		// 	  return songData
		// 	})
		  console.log("fetchSongs", fetchSongs.data)
		const songData = fetchSongs.data

		songData.map((song, index) => {
			  let songCard = `<div id="music-container" class="music-container">
	<div class="card deezerApi"  style="width: 18rem;">
	  <img class="card-img-top" src="${song.album.cover_medium}" alt="Card image cap">
	  <div class="card-body">
	<div id="songTitle">${song.title}</div>
	<br>
	<audio controls type="audio/mpeg" src="${song.preview}" id="audio" style="width: 100%"></audio>
  </div>
  <div class="accordion accordion-flush" id="accordionFlushExample">
<div class="accordion-item">
  <h2 class="accordion-header" id="flush-heading${index}">
	<button id="accordionBtn" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
	  Lyrics
	</button>
  </h2>
  <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
	<div id="accordBody${index}" class="accordion-body"></div>
  </div>
</div>
	</div>
	  </div>
	  </div>`;
	  //console.log(songCard);
	  results.innerHTML += songCard;
		});

		console.log("songData", songData);

	const lyricFetch = songData.map(async (song, index) => {
		console.log("artist", song.artist.name);
		console.log("title", song.title);
		await fetch(`https://private-amnesiac-3503f-lyricsovh.apiary-proxy.com/v1/${song.artist.name}/${song.title}`)
	.then(response => response.json())	

	.then(lyrics => {
	const accordBody = document.getElementById(`accordBody${index}`)
	console.log(lyrics);
	accordBody.innerHTML = lyrics.lyrics;
	})
	});
	// setTimeout(() => {
	// 	const payload = lyricFetch;
	// console.log(payload)}, 3000);
	

	
// 	  //console.log(song);

// 			  console.log(results.innerHTML)
			  
// 			  console.dir(accordBody);
// 			  console.log(`accordBody["${index}"]`)
			  
// 			  })	

			//${ songLyrics.data != “” ? PRINT THE LYRICS : “Lyrics not found”}
		

	

	
	
	//promise.all = 

	// Promise.all([fetchSongs]).then((values) => {
	// 	console.log("promise.all", values);
	//   });

		console.log("this is the songs fetch",fetchSongs);
		// console.log("this is the lyrics fetch",lyricFetch);


	
});
  

    	


    