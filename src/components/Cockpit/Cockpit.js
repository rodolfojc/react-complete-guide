import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    // componentDidMount and componentDidUpdate togeteher for a functional component
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
                  // MOST USEFULL LIFECYCLE HOOKS

    useEffect (() => {
      console.log('[Cockpit] - useEffect()');
      // HTTP Request.....
    });

    ///////////////////////////////////////////////////////////////////////

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