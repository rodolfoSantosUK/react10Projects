import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
    </div>
  );
}

class Header extends Component {
  
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to react</h2>
        </header>

      </div>
    )
  }
}

class Intro extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reaload
      </p>

      </div>
    )
  }
}


export default App;
