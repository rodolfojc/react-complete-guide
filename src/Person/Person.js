import React from 'react';

// Functional Component 
const person = (props) => {

    return <p>I'm {props.name} and I am {props.age} years old!!</p>

    // Using JS Functions
    //return <p>I'm a Person and I am {Math.floor(Math.random()*30)} years old!!</p>
};

export default person;