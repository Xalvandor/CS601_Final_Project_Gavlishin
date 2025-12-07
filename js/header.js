//React component for a header with a menu that can be toggled on and off
function Header() {
  return (<header>
      <nav>
        <button id="toggle" onClick={() => {
          //JS for toggling menu on and off
          const menu = document.getElementById("menu");
          const button = document.getElementById("toggle");
          if (window.getComputedStyle(menu).display === "none") {
            menu.style.display = "block";
            button.style.backgroundColor = "#22C1C3";
          } else {
            menu.style.display = "none";
            button.style.backgroundColor = "transparent";
          }
        }}>☰
        </button>
        {/* menu for navigating website*/}
      </nav>
      <ul id="menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="resume.html">Resume</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="music.html">Music</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </header>
  )
}

ReactDOM.render(<Header/>, document.getElementById('header'));
