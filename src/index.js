import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpackd
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



render(
    <Router  routes={routes}/>,
    document.getElementById('app')
);