const searchButton = document.getElementById("search-btn");
const artistBox = document.getElementById("artistName");
const songBox = document.getElementById("songName");


searchButton.addEventListener("click", (e) => {
    console.log("button clicked");
    e.preventDefault();
    let musicSearch = {
        "artist": artistBox.value,
        "song": songBox.value
    }
    console.log(musicSearch);

     localStorage.setItem("musicSearch", JSON.stringify(musicSearch))
     window.location.replace("http://127.0.0.1:5501/songs.html");

});
