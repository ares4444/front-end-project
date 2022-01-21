const musicContainer = document.getElementById("music-container");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");

const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Song Titles
// fetch?
const songs = ['hey', 'summer', 'ukulele']

//Keep track of songs?
let songIndex = 2;

// Load song into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    //cover.src = `images/${song}.jpg`
} 

// Play Song
function playSong() {
    console.log("playing song")
    musicContainer.classList.add('play')
    playBtn.querySelector('i.bi').classList.remove('bi-play-fill')
    playBtn.querySelector('i.bi').classList.add('bi-play-fill')

    audio.play()
}

//  Pause Song
function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.bi').classList.add('bi-play-fill')
    playBtn.querySelector('i.bi').classList.remove(bi-play-fill)

    audio.pause()
}


// Event Listeners
playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})