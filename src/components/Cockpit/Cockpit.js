import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect (() => {
      console.log('[Cockpit] - useEffect()');
      // HTTP Request.....
      setTimeout(() => {
        alert('Save data to the cloud');
      }, 1000);
      return () => {
        alert('[Cockpit] - useEffect() - Cleaning up work in useEffect()');
      }
      
    }, []); // [] - empty array - just exc just one, with parameters as [props.person] - chages everytime persons changes

    const assignedClasses = [];
    let btnClass = '';

    if( props.showPerson ) {
        btnClass = classes.Red;
    }   

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', bold]
    }


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>        
            <p className={assignedClasses.join(' ')}>Let's code!!</p>  
            <button className={btnClass}
                onClick={props.clicked}> Toggle Persons </button>
        </div>
    );
};

export default cockpit;