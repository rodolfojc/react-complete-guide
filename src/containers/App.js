import React, { Component } from "react";

import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxilliary";

// Class based Component
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] - Constructor");
    //this.state = {};
  }

  state = {
    persons: [
      { id: 1, name: "Rodolfo", age: 32 },
      { id: 2, name: "Juan", age: 45 },
      { id: 3, name: "Cesar", age: 21 }
    ],
    otherState: "something else",
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] - getDerivedStateFromProps()", props);
    return state;
  }

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // MOST IMPORTANT HOOKS

  componentDidMount() {
    console.log("[App.js] - componentDidMount()");
  }

  shouldComponentUpdate() {
    console.log("[App.js] - shouldComponentUpdate()");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.js] - componentDidUpdate()");
  }

  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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

    // Righ way to update state that depends on the old state
    this.setState((prevState, props) => {
      return { persons: persons, 
        changeCounter: prevState.state.changeCounter + 1 
        };
      });
    };  

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  // npm install --save radium
  // to add any pseudo selector
  render() {
    console.log("[App.js] - render");
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.title}
            showPerson={this.state.showPerson}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
            login={this.loginHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
