import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
    }

    return (
      <div className="App">
        <h1>Hi, I'm Rodolfo</h1>
        <p>This is a test</p>  
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {person}
      </div>
    );
  
  }
}

export default App;
