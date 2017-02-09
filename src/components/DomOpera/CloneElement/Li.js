import React, { Component } from 'react';

class Li extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props.i, nextProps.i);
  }

  render() {
    return <li>{this.props.i}</li>
  }
}

export default Li;
