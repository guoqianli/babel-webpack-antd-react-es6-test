import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGruop = Menu.ItemGroup;

class Sider extends Component {
    constructor(props) {
        super(props);

        const getHash = () => window.location.hash.slice(2);
        const pathArry = getHash().split('/');
        const Path = pathArry[pathArry.length - 1];

        this.state = {
            selected: Path        
        }
    }

    handleClick(e) {
        console.log('click', e);

        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Menu onClick={this.handleClick.bind(this)}
                style={{ width: 240 }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[this.state.selected]}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" />One</span>}>
                    <Menu.Item key="block"><Link to="/one/block">Block</Link></Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
};

export default Sider;