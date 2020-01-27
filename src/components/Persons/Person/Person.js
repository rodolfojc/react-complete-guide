import React, { Component } from "react";
import PropTypes from 'prop-types';

import classes from "./Person.css";
import withClasses from '../../../hoc/withClass';
import Aux from "../../../hoc/Auxilliary";

// Converting Person.js Functional to Class-based
class Person extends Component {

    componentDidMount() {
      this.inputElement.focus();
    }

  render() {
    console.log("[Person.js] - Rendering");
    return (
      <Aux>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          ref={(inputEl) => {this.inputElement = inputEl}}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClasses(Person, classes.Person);
