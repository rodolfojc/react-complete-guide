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
    ],
    otherState: 'something else',
    showPerson: false

  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Rodolfo Joham';
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Juan Lapass', age: 45 },
        { name: 'Cesar Laparque', age: 21 }
      ],
      otherState: 'something else'
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Rodolfo', age: 32 },
        { name: event.target.value, age: 45 },
        { name: 'Cesar Laparque', age: 21 }
      ],
      otherState: 'something else'
    })

  };

  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  };


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '4px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if(this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map(person =>{
            return <Person 
              name={person.name} 
              age={person.age}/>
          })}
        </div>
      );
    }

            // <Person 
            //   name={this.state.persons[0].name} 
            //   age={this.state.persons[0].age} />
            // <Person 
            //   name={this.state.persons[1].name} 
            //   age={this.state.persons[1].age}
            //   click={this.switchNameHandler.bind(this, 'Rodo')}
            //   changed={this.nameChangedHandler}>I'm Venezuelan</Person>
            // <Person 
            //   name={this.state.persons[2].name} 
            //   age={this.state.persons[2].age} />
            

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

  // JSX => DEMO 
  //return React.createElement('div', { className: 'App'} , React.createElement('h1', null, 'Hola!!'), 'Hello There!');
  }
}

export default App;
