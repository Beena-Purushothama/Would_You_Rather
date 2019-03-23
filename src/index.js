import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,compose} from 'redux';
import reducer from './Reducers'
import middleware from './Middleware'

const store =  createStore(reducer, compose(
  middleware,
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
<Provider store ={store}>
    <App />
</Provider>, document.getElementById('root'));


