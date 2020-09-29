

import React, { Component } from 'react';
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleNameTextChange(e) {
    this.setState({nameText: e.target.value})
    console.log(this.state)
  } 
  render() {
    return (
      <>
        <h1>Welcome to Quizy</h1>
        <h3>Please enter your name</h3>
        <input type="text" value={this.state.nameText}/>
        <button type="button">Start</button>
      </>
    )
  }
}
export default Welcome;