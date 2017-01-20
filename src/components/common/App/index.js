import React, { Component } from 'react';
import { Layout } from 'antd';

import Nav from '../Nav/index';
import Color from '../../pluginUnit/Color';
import './index.css';

const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    const bgColor = 'rgba(0,0,0,0.75)';

    return (
      <Layout className="layout">
        <Sider style={{ background: bgColor }}>
          <Nav />
        </Sider>
        <Layout>
          <Header className="header" style={{ background: '#fff', paddingLeft: '10px' }}>
            <Color
              bgColor
            />
            <span>
              我的react组件测试项目
            </span>
          </Header>
          <Content className="content" style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
