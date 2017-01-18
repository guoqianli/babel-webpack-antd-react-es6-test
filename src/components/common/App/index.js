import React from 'react';
import { Layout } from 'antd';

import Nav from '../Nav/index';
import './index.css';

const { Header, Content, Sider } = Layout;

function App({ children }) {
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
                    { children }
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
