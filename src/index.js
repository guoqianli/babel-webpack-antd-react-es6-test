import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import 'antd/dist/antd.css';

import routes from './routes';
import './css/common.scss';

render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('root')
);