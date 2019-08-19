import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/styles.scss';

render(React.createElement(App), document.querySelector('#root'));
