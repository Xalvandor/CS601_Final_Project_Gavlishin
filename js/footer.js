//React component for displaying footer on the bottom of each page
//Footer includes my logo, the current year, and clickable thumbnail links for GitHub and YouTube
function Footer() {
  return (<footer>
    <img src="data/kolya-high-resolution-logo.png" alt="Kolya's green plant logo"/>
    <p>&copy; {new Date().getFullYear()} Portfolio Website - Gavlishin</p>
    <a href="https://github.com/Xalvandor" target="_blank"><img
      src="https://pngimg.com/uploads/github/github_PNG53.png" alt="GitHub logo"/></a>
    <a href="https://www.youtube.com/@kolya_kvasolya" target="_blank"><img
      src="https://freepngimg.com/thumb/youtube/77779-logo-youtube-hd-image-free-png.png" alt="YouTube logo"/></a>
  </footer>);
}

ReactDOM.render(<Footer/>, document.getElementById('footer'));
