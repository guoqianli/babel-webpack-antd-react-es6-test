// 使用react-router-loader将组件转为可按需加载的组件
import App from 'react-router!./common/App';

import Login from 'react-router!./Login';
import NotFound from 'react-router!./NotFound';
import Blocks from 'react-router!./PluginUnit/Block';
import Dnd from 'react-router!./PluginUnit/Dnd';
import Color from 'react-router!./PluginUnit/Color';
import FindeDomNode from 'react-router!./DomOpera/FindDomNode';
import Refs from 'react-router!./DomOpera/Refs';

export const containers = {
  Login,
  NotFound,
  Blocks,
  Dnd,
  Color,
  FindeDomNode,
  Refs,
};

export const components = {
  App
};

