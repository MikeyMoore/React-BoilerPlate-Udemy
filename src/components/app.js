import React, { Component } from 'react';
import Button from './button';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        {this.state.counter}
        <Button name={'Add One'} clicked={() => this.setState({ counter: this.state.counter + 1 })}/>
      </div>
    );
  }
}
