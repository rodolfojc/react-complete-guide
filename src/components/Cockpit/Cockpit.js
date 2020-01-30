import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  
    useEffect (() => {
      console.log('[Cockpit] - useEffect()');
      // HTTP Request.....
      // setTimeout(() => {
      //   alert('Save data to the cloud');
      // }, 1000);
      toggleBtnRef.current.click();
      return () => {
        console.log('[Cockpit] - useEffect() - Cleaning up work in useEffect()');
      }
     
    }, []); // [] - empty array - just exc just one, with parameters as [props.person] - chages everytime persons changes

    useEffect(() => {
      console.log('[Cockpit] - 2nd useEffect()');
      return () => {
      console.log('[Cockpit] - useEffect() - Cleaning up work in 2nd useEffect()');
      };
    });

    const assignedClasses = [];
    let btnClass = '';

    if( props.showPerson ) {
        btnClass = classes.Red;
    }   

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', bold]
    }


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>        
            <p className={assignedClasses.join(' ')}>Let's code!!</p>  
            <button
                ref={toggleBtnRef} 
                className={btnClass}
                onClick={props.clicked}> Toggle Persons 
            </button>            
                <button onClick={authContext.login}>Lon in</button>
              }           
        </div>
    );
};

export default React.memo(cockpit);