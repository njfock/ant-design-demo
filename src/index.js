import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import Main from './components/Main';
import About from './components/About';
import NavBar from './components/NavBar';
import getStore from './store/getStore';
import * as serviceWorker from './serviceWorker';

const {store} = getStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Main}/>
      </Switch>
      
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
