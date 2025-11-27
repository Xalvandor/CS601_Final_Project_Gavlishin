const click = document.getElementById("resume");

const message = document.getElementById("message");

click.addEventListener("click", () => {
  message.innerHTML = "Thank you for downloading my resume!";
  message.style.color = "Green";
});
