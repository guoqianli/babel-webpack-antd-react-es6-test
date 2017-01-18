// 使用react-router-loader将组件转为可按需加载的组件
import App from 'react-router!./common/App';

import Login from 'react-router!./Login';
import NotFound from 'react-router!./NotFound';
import Blocks from 'react-router!./Block';
import Dnd from 'react-router!./Dnd';

export const containers = {
    Login,
    NotFound,
    Blocks,
    Dnd,
};

export const components = {
    App
};

