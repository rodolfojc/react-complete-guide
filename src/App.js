import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Class based Component 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Rodolfo</h1>
        <p>This is a test</p>
        <Person name="Rodolfo" age="32" />
        <Person name="Juan" age="45">I'm Venezuelan</Person>
        <Person name="Cesar" age="21" />
      </div>
    );

  // JSX => DEMO 
  //return React.createElement('div', { className: 'App'} , React.createElement('h1', null, 'Hola!!'), 'Hello There!');
  }
}

export default App;
