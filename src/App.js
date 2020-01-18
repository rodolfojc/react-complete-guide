import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Class based Component 
class App extends Component {

  // Defining properties in Class Based Conponents - Extends Components
  // Reserved Word - STATE
  state = {
    persons: [
      { name: 'Rodolfo', age: 32 },
      { name: 'Juan', age: 45 },
      { name: 'Cesar', age: 21 }
    ]
  }

  switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = 'Rodolfo Joham';
    this.setState({
      persons: [
        { name: 'Rodolfo Joham', age: 32 },
        { name: 'Juan Lapass', age: 45 },
        { name: 'Cesar Laparque', age: 21 }
      ],
      otherState: 'something else'
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Rodolfo</h1>
        <p>This is a test</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I'm Venezuelan</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

  // JSX => DEMO 
  //return React.createElement('div', { className: 'App'} , React.createElement('h1', null, 'Hola!!'), 'Hello There!');
  }
}

export default App;
