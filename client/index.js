import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/styles.scss';
import {store} from './redux/store'
import { Provider } from 'react-redux'


render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.querySelector('#root'));
