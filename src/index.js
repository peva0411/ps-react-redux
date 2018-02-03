import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import './styles/styles.css'; //Webpackd
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <Router  routes={routes}/>
    </Provider>,
    document.getElementById('app')
);