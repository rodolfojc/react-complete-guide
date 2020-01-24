import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    // Array of Classes - Names 
    // const classes = ['red', 'bold'].join(' ');
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
            <h1>Hi, I'm Rodolfo</h1>        
            <p className={assignedClasses.join(' ')}>Let's code!!</p>  
            <button className={btnClass}
                onClick={props.clicked}> Toggle Persons </button>
        </div>
    );
};

export default cockpit;