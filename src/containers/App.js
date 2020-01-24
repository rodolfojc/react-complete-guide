import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// Class based Component 
class App extends Component {

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
    
    let persons = null;
   
    if(this.state.showPerson) {
      persons = <Persons 
          persons = {this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>                  
    };   

    return (      
      <div className={classes.App}>
        <Cockpit 
        showPerson = {this.state.showPerson}
        persons={this.state.persons}
        clicked={this.togglePersonHandler}/>
        {persons}
      </div>
      );
   }
}

export default App;
