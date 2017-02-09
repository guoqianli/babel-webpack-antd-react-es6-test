import React, { Component } from 'react';
import { Button } from 'antd';

let i = 0;
class Ul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ina: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(2222222);
    console.log(this.state.ina, nextState.ina);
    return nextState.ina > 3 ? true : false; // 返回true才会渲染组件
  }

  componentWillUpdate(nextProps, nextState){
    console.log( '还没渲染哦', this.state.ina, nextState.ina );
  }

  componentDidUpdate(nextProps, nextState){
    console.log( '已经渲染完毕咯', this.state.ina, nextState.ina );
  }



  handleClick() {
    this.setState({
      ina: i++,
    });
  }

  render() {
    const { ina } = this.state;
    return (
      <div>
        <ul>{React.Children.map(this.props.children, (child, index) => {
          return React.cloneElement(child, { i: ina });
        })}
        </ul>
        <Button onClick={this.handleClick.bind(this)}>添加一行</Button>
      </div>
    );
  }

}

export default Ul;
