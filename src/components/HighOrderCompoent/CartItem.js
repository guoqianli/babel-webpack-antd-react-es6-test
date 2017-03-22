import React from 'react';
import { IntervalEnhance } from './IntervalEnhance';

class CartItem extends React.Component {
  render() {
    return (<article className="row large-4">
      <p className="large-12 column">
        <strong>Time elapsed for interval: </strong>
        {this.props.seconds} ms
      </p>
    </article>);
  }
}

export default IntervalEnhance(CartItem);
