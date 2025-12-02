const musicAPI = "https://xalvandor.github.io/CS601_Final_Project_Gavlishin/data/music.json";

addEventListener("DOMContentLoaded", fetchMusic);

const videosSrcs = new Map();

const videoDescriptions = new Map();

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

function processMusic(data) {

  const playlist = document.getElementById("playlist");

  data.forEach(item => {
    let videoButton = document.createElement("button");
    videoButton.id = item.id;
    videoButton.innerText = item.title;
    videosSrcs.set(videoButton.id, item.src);
    videoDescriptions.set(videoButton.id, item.description);
    videoButton.addEventListener("click", () => {
      document.getElementById("featured").src = videosSrcs.get(videoButton.id);
      document.getElementById("description").innerText = videoDescriptions.get(videoButton.id);

    })
    let videoDescription = document.createElement("p");
    videoDescription.innerText = item.description;
/*
    let video = document.createElement("iframe");
    video.src = item.src;
    video.allowFullscreen = "true";
    video.width="560";
    video.height="315";
 */
    playlist.appendChild(videoButton);

  })

  document.getElementById("featured").src=videosSrcs.get("1");
  document.getElementById("description").src=videoDescriptions.get("1");
}
