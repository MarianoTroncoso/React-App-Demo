import React from 'react';
import logo from './logo.svg';
import './App.css';
// hi

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Busters</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://www.atleticodemadrid.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mejor club
        </a>
      </header>
    </div>
  );
}

export default App;
