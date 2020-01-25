import React, { Component } from 'react';
import Person from './Person/Person';



//            extends PureComponent (import React, { PureComponent } from 'react';)
class Persons extends Component {

  // Lifecicles

  // COMMENTED BECAUSE CREATES AND ERROR AS STATE IS NOT NECESSARY TO UPDATE
  // static getDerivedStateFromProps (props, state) {
  //   console.log('[Persons.js] - getDerivedStateFromProps()');
  //   return state;
  // };

  // Performance automatization
  shouldComponentUpdate (nextProps, nextState) {
    console.log('[Persons.js] - shouldComponentUpdate()');

    // It works if the pointer change - object! the location in memory
    if ( nextProps.persons !== this.props.persons) {
      return true;
    }
      return false;
    }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('[Persons.js] - getSnapshotBeforeUpdate()');
    return { message: 'Snapshot!'};    
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('[Persons.js] - componentDidUpdate()');
    console.log(snapshot);
  }

  // Code will be exc right before the component is removed
  componentWillUnmount () {
    console.log('[Persons.js] - componentDidUpdate()');
  }

  render () {
  console.log('[Persons.js] - Rendering...');
  return this.props.persons.map((person, index) =>{
       return (<Person
          click={() => this.props.clicked(index)} 
          name={person.name} 
          age={person.age}             
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
              />
    );
  })
};
}

export default Persons;