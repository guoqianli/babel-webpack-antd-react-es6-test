import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Sider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'block',
      openKeys: [],
    };
  }

  handleClick(e) {
    console.log('click', e);

    this.setState({
      current: e.key,
    });
  }

  onOpenChange(openKeys) {
    const state = this.state;

    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }

  getAncestorKeys(key) {
    const map = {
      sub3: ['domOpera'],
    };
    return map[key] || [];
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick.bind(this)}
        style={{ width: 240 }}
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange.bind(this)}
        defaultOpenKeys={['pluginUnit']}
        selectedKeys={[this.state.current]}
        mode="inline"
        theme="dark"
      >
        <SubMenu key="pluginUnit" title={<span><Icon type="mail" />PluginUnit</span>}>
          <Menu.Item key="block"><Link to="/pluginUnit/block">Block</Link></Menu.Item>
          <Menu.Item key="dnd"><Link to="/pluginUnit/dnd">Dnd</Link></Menu.Item>
          <Menu.Item key="color"><Link to="/pluginUnit/color">Color</Link></Menu.Item>
          <Menu.Item key="tabs"><Link to="/pluginUnit/tabs">Tabs</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="domOpera" title={<span><Icon type="setting" />DomOpera</span>}>
          <Menu.Item key="findDomNode"><Link to="/domOpera/findDomNode">FindDomNode</Link></Menu.Item>
          <Menu.Item key="refs"><Link to="/domOpera/refs">Refs</Link></Menu.Item>
          <Menu.Item key="cloneElement"><Link to="/domOpera/cloneElement">cloneElement</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;
