import React, { Component } from 'react';
import Button from './button';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Enter Text',
      text: 'Some Text',
    };
  }

  textEntered = (event) => {
    this.setState({ value: event.target.value });
  }

  changeText = () => {
    this.setState({ text: this.state.value });
  }

  render() {
    return (
      <div>
        {this.state.text}
        <input input="text" value={this.state.value} onChange={this.textEntered} />
        <Button name={'Click Me'} clicked={this.changeText} />
      </div>
    );
  }
}
