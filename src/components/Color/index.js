import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '#fff',
    };
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  }

  render() {
    return (
      <SketchPicker
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
      />
    );
  }
}

export default Color;
