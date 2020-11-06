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
          Version 6.11.2020 klo 12 reikäleipä
        </p>
        <a
          className="App-link"
          href="https://io¨-tech.fi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about coding
        </a>
    
     <div align="center">
        <a href="https://www.270towin.com/maps/consensus-2020-electoral-map-forecast">
        <img src="https://www.270towin.com/map-images/consensus-2020-electoral-map-forecast.png" width="800" />
        </a>
        <br>
        <small>
        <img style="vertical-align:middle;" src="https://www.270towin.com/uploads/3rd_party_270_30px.png" alt="" /> 
        Click the map to create your own at 
        <a href="https://www.270towin.com/maps/consensus-2020-electoral-map-forecast">270toWin.com</a></small>
        </div>

      </header>   
    </div>
  );
}

export default App;
