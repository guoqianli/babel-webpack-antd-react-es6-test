// 使用react-router-loader将组件转为可按需加载的组件
import App from 'react-router!./common/App/index';

import Login from 'react-router!./Login/index';
import NotFound from 'react-router!./NotFound/index';
import Block from 'react-router!./Block/index';

export const containers = {
    Login,
    NotFound,
    Block
};

export const components = {
    App
};

