import React, { Component } from 'react';
// npm install --save radium
//import Radium, { StyleRoot } from 'radium';

//npm install --save styled-components
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 2px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
  `;

// Class based Component 
class App extends Component {

  // Defining properties in Class Based Conponents - Extends Components
  // Reserved Word - STATE
  state = {
    persons: [
      { id: 1, name: 'Rodolfo', age: 32 },
      { id: 2, name: 'Juan', age: 45 },
      { id: 3, name: 'Cesar', age: 21 }
    ],
    otherState: 'something else',
    showPerson: false

  }

  deletePersonHandler = (personIndex) => {
    //Differente ways
    //const persons = this.state.persons.slice();
    //Spread way
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Spread operator
    const person = {
      ...this.state.persons[personIndex]
    };

    // Alternative 
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons : persons} );

  };

  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  };


  // npm install --save radium
  // to add any pseudo selector
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'

      }
    };

    let person = null;

    if(this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}             
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

    }

    // Array of Classes - Names 
    // const classes = ['red', 'bold'].join(' ');
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', bold]
    }

    return (
      
      <div className="App">
        <h1>Hi, I'm Rodolfo</h1>        
        <p className={classes.join(' ')}>Let's code!!</p>  
        <StyledButton
          onClick={this.togglePersonHandler}>
          Toggle Persons
        </StyledButton> 
        {person}
      </div>
      );
   }
}

// higher order component 
export default App;
