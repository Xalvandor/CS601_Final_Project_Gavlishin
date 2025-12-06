const click = document.getElementById("resume");

const message = document.getElementById("message");

click.addEventListener("click", () => {
  message.innerHTML = "Thank you for downloading my resume!";
  message.style.color = "Green";
});

function toggleResume() {
  const resumeButton = document.getElementById("resume-button");

  const resumeDoc = document.getElementById("resume-doc");

  if (window.getComputedStyle(resumeDoc).display === "none") {
    resumeDoc.style.display = "revert";
    resumeButton.innerText = "Hide Resume";
  } else {
    resumeDoc.style.display = "none";
    resumeButton.innerText = "View Resume";
  }
}
