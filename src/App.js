import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const promise = new Promise((resolve, reject) =>
  setTimeout(
    () =>
      resolve({
        data: {
          hits: [
            { objectID: '1', title: 'a' },
            { objectID: '2', title: 'b' },
          ],
        },
      }),
    100
  )
);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
