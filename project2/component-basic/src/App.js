import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.yourName = "ammy";
    this.state = {}
  }

  sayHello(name) {
    return "Hello" + name;
  }

  render() {
    const myName = "Sammy"

    return (
      <div className="App">
        <h2>Just some sample data: {this.sayHello(" Sammy")} </h2>
    <h2>Property yourName: {this.yourName}</h2>
      </div>
    );


  }

}


export default App;
