import React, { Component } from 'react';
import Ul from './Ul';
import Li from './Li';

class CloneElement extends Component {
  render() {
  console.log(React.isValidElement(<Ul />)); // 判断是否为合法的ReactElement
    return (
      <Ul>
        <Li i="9" />
        <Li i="8" />
        <Li i="7" />
      </Ul>
    );
  }

}

export default CloneElement;

