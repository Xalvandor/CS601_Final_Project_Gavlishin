//URL to JSON with YouTube video info
const musicAPI = "https://xalvandor.github.io/CS601_Final_Project_Gavlishin/data/music.json";
//loads music content
addEventListener("DOMContentLoaded", fetchMusic);

//creates map of video ids to srcs
const videosSrcs = new Map();
//creates map of video ids to descriptions
const videoDescriptions = new Map();
//fetches data from JSON for music video playlist
const videoTitles = new Map();

function fetchMusic() {
  fetch(musicAPI)
    .then((response) => {
      return response.json();
    }).then(data => {
    processMusic(data);
    console.log(data);
  }).catch((err) => {
    console.log('rejected', err);
  });
}
//function for processing fetched JSON data
function processMusic(data) {
  //grabs playlist element from DOM
  const playlist = document.getElementById("playlist");

  data.forEach(item => {
    //creates button for each video on the playlist with the title
    let videoButton = document.createElement("button");
    videoButton.id = item.id;
    videoButton.innerText = item.title;
    //adds video info to Maps
    videosSrcs.set(videoButton.id, item.src);
    videoDescriptions.set(videoButton.id, item.description);
    videoTitles.set(videoButton.id, item.title);
    //adds event listener to each button to change the featured video, the title and the description
    videoButton.addEventListener("click", () => {
      document.getElementById("featured").src = videosSrcs.get(videoButton.id);
      document.getElementById("description").innerText = videoDescriptions.get(videoButton.id);
      document.getElementById("video-title").innerText = videoTitles.get(videoButton.id);
    })
    //displays the description below the featured video
    let videoDescription = document.createElement("p");
    videoDescription.innerText = item.description;
    // adds button to the playlist element
    playlist.appendChild(videoButton);

  })
  //logic for displaying the video when DOM is loaded before any button clicks
  document.getElementById("featured").src=videosSrcs.get("2");
  document.getElementById("description").innerText=videoDescriptions.get("2");
  document.getElementById("video-title").innerText=videoTitles.get("2");
}
