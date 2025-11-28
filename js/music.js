const musicAPI = "https://xalvandor.github.io/CS601_Final_Project_Gavlishin/music.json";

addEventListener("DOMContentLoaded", fetchMusic);

const videos = new Map();

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
    videos.set(videoButton.id, item.src);
    videoButton.addEventListener("click", () => {
      // let selected = document.getElementById(item.id);
      console.log(videoButton.id, typeof videoButton.id);
      console.log(videos);
      console.log(videos.get(typeof videoButton.id));
      document.getElementById("featured").src=videos.get(videoButton.id);
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
    //videoItem.appendChild(video);
    // videoItem.appendChild(videoDescription);


  })

  document.getElementById("featured").src=videos.get("1");
}

console.log(videos);
/*
document.addEventListener("click", () => {

} )


 */
