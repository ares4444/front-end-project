// const musicBox = document.getElementById("music-box");
// const musicBox = document.createElement("musicBox");
// const input = document.getElementsById("input");

fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${input}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "df9785e730msh0922b9a2e2168d3p19afc2jsn59ef3161dabf"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

// musicBox.addEventListener("click" (playback => {
//     let playAudio = musicBox.play();
//     let pauseAudio = musicBox.pause();
// }));

fetch("https://genius.p.rapidapi.com/search?q=Kendrick%20Lamar", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "df9785e730msh0922b9a2e2168d3p19afc2jsn59ef3161dabf"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

