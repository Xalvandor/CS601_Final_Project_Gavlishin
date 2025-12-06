function Header() {
  return (<header>

      <nav >
        <button id="toggle" onClick={() => {
          const menu = document.getElementById("menu");
          if (menu.style.display === "none") {
            menu.style.display = "block";
          } else {
            menu.style.display = "none";
          }
        }}>☰</button>
        <ul id="menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="resume.html">Resume</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="quiz.html">Quiz</a></li>
          <li><a href="music.html">Music</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

ReactDOM.render(<Header/>, document.getElementById('header'));
