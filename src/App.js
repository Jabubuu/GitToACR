import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing version control and docker containers
        </p>
        <p>
          Version 5.11.2020 klo 19.00
        </p>
        <a
          className="App-link"
          href="https://google.fi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about coding
        </a>
      </header>
    </div>
  );
}

export default App;
