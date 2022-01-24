const inputBox = document.getElementById("artistName");
const searchButton = document.getElementById("search-btn");
const artistBox = document.getElementById("artistName")


searchButton.addEventListener("click", (e) => {
    console.log("button clicked");
    e.preventDefault();
    let musicSearch = inputBox.value;
    console.log(musicSearch);

    let artistSearch = artistBox.value;
    console.log(artistSearch);
    
    localStorage.setItem("artist", musicSearch)
    window.location.replace("http://127.0.0.1:5501/songs.html");

});
