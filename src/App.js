import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          learn react
        </p>
        <p>
          Version 25.11.2020 Hello World!
        </p>
        <a
          className="App-link"
          href="https://io-tech.fi"
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
