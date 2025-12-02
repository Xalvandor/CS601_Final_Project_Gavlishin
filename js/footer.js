const year = new Date().getFullYear()

function Footer() {
  return (<footer>
            <small>&copy; {year} Portfolio Website.</small>
  </footer>);
}

ReactDOM.render(<Footer/>, document.getElementById('footer'));
