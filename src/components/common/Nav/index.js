import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Sider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'block'
    };
  }

  handleClick(e) {
    console.log('click', e);

    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick.bind(this)}
        style={{ width: 240 }}
        openKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline"
        >
        <SubMenu key="sub1" title={<span><Icon type="mail" />One</span>}>
          <Menu.Item key="block"><Link to="/one/block">Block</Link></Menu.Item>
          <Menu.Item key="dnd"><Link to="/one/dnd">Dnd</Link></Menu.Item>
          <Menu.Item key="color"><Link to="/one/color">Color</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;
