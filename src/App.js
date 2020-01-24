import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';


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
    
    let person = null;
    let btnClass = [classes.Button];

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
    
      btnClass.push(classes.Red);

    }

    // Array of Classes - Names 
    // const classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', bold]
    }

    return (
      
      <div className={classes.App}>
        <h1>Hi, I'm Rodolfo</h1>        
        <p className={assignedClasses.join(' ')}>Let's code!!</p>  
        <button className={btnClass.join(' ')}
          alt={this.state.showPerson}
          onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {person}
      </div>
      );
   }
}

export default App;
