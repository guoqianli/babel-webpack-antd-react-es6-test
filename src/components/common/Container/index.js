import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import Nav from '../Nav/index';
import "./index.css";

class Container extends Component {
    render() {
        return (
            <Layout className="layout">
                <Sider>
                    <Nav />    
                </Sider>
                <Layout>
                    <Header className="header" style={{ background: '#fff', padding: 0 }}>
                        <span>
                            我的react组件测试项目
                        </span>
                    </Header>
                    <Content className="content" style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        Content
                    </Content>
                </Layout>            
            </Layout>
        );
    }
}

export default Container;
