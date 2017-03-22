import React from 'react';

export const IntervalEnhance = ComponsedComponent => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick() {
    this.setState({
      seconds: this.state.seconds + 1000
    });
  }
  render() {
    return <ComponsedComponent {...this.props} {...this.state} />;
  }
};
