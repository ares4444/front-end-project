
const inputBox = document.getElementById("input");
const searchButton = document.getElementById("search-btn");


searchButton.addEventListener("click", (e) => {
    console.log("button clicked");
    e.preventDefault();
    let musicSearch = inputBox.value;
    console.log(musicSearch);

    localStorage.setItem("artist", musicSearch)
    window.location.replace("http://127.0.0.1:5500/songs.html");

});
