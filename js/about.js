const aboutMeURL = "https://xalvandor.github.io/CS601_Final_Project_Gavlishin/data/about.json";

addEventListener("DOMContentLoaded", () => {
    fetchAboutMe();
});


function fetchAboutMe(){
  fetch(aboutMeURL)
    .then((response) => {
    return response.json();
  }).then(data => {
    processAboutMe(data);
    console.log(data);
  }).catch((err) => {
    console.log('rejected', err);
  });
}

function processAboutMe(data){
  let counter = 0;
  let order = 1;
  data.forEach(item => {
        let aboutMeSection = document.createElement("section");
        aboutMeSection.id = item.id;
        let aboutMeDescription = document.createElement("p");
        aboutMeDescription.innerText = item.description;
        aboutMeDescription.id = item.id;
        counter++;
        order = counter % 2;
        aboutMeDescription.style.order = order.toString();
        let aboutMeImg = document.createElement("img");
        aboutMeImg.src = item.src;
        aboutMeImg.alt = item.alt;
        aboutMeImg.id = item.id;
        order = (counter + 1) % 2;
        aboutMeImg.style.order = order.toString();

        document.getElementById("about-me").appendChild(aboutMeSection);
        document.getElementById(aboutMeSection.id).appendChild(aboutMeDescription);
        document.getElementById(aboutMeDescription.id).appendChild(aboutMeImg);
    }
  )
}
