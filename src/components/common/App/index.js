import React, { Component } from 'react';
import { Layout } from 'antd';
import classnames from 'classnames';

import Nav from '../Nav/index';
import Color from '../../pluginUnit/Color';
import styles from './index.scss';

const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    const bgColor = 'rgba(0,0,0,0.75)';
    const classes = classnames(`${styles.header}`, 'wBg');

    return (
      <Layout className={styles.layout}>
        <Sider style={{ background: bgColor }}>
          <Nav />
        </Sider>
        <Layout>
          <Header className={classes} style={{ paddingLeft: '10px' }}>
            <Color
              bgColor
            />
            <span>
              我的react组件测试项目
            </span>
          </Header>
          <Content className={styles.content} style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
