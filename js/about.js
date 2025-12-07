//URL for JSON data for About ME Page
const aboutMeURL = "https://xalvandor.github.io/CS601_Final_Project_Gavlishin/data/about.json";
//event listener that loads JSON data once DOM is loaded
addEventListener("DOMContentLoaded", () => {
    fetchAboutMe();
});

// fetch API for loading JSON data
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

//function for processing loaded data
function processAboutMe(data){
  //counter and order variables used to alternate order of image and text
  let counter = 0;
  let order = 1;
  data.forEach(item => {
    //creates section for each part of the about me bio
    let aboutMeSection = document.createElement("section");
    aboutMeSection.id = item.id;
    //creates a heading for the section
    let aboutMeHeader = document.createElement("h2");
    aboutMeHeader.id = item.id + "-header";
    aboutMeHeader.innerText = item.id;
    //creates a p element for the description
    let aboutMeDescription = document.createElement("p");
    aboutMeDescription.innerText = item.description;
    aboutMeDescription.id = item.id + "-description";
    //logic for alternating the order of the images with the text
    counter++;
    order = counter % 2;
    aboutMeDescription.style.order = order.toString();
    //creates image element for each section
    let aboutMeImg = document.createElement("img");
    aboutMeImg.src = item.src;
    aboutMeImg.alt = item.alt;
    aboutMeImg.id = item.id + "-img";
    //logic for alternating the order of the images with the text
    order = (counter + 1) % 2;
    aboutMeImg.style.order = order.toString();
    //creates div container for image with some styling
    let textImgDiv = document.createElement('div');
    textImgDiv.id = aboutMeDescription.id + "-" + aboutMeImg.id;
    textImgDiv.style.display = "flex";
    textImgDiv.style.justifyContent = "center";
    textImgDiv.style.alignItems = "center";

    //adds elements to the DOM
    document.getElementById("about-me").appendChild(aboutMeSection);
    document.getElementById(aboutMeSection.id).appendChild(aboutMeHeader);
    document.getElementById(aboutMeSection.id).appendChild(textImgDiv);

    document.getElementById(textImgDiv.id).appendChild(aboutMeDescription);
    document.getElementById(textImgDiv.id).appendChild(aboutMeImg);
    }
  )
}
