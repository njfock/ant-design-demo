import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import './index.css';
import Counter from './components/Counter';
import Users from './components/Users';
import Home from './components/Home';
import Main from './components/Main';
import About from './components/About';
import AppRoute from './components/App';
import getStore from './store/getStore';
import * as serviceWorker from './serviceWorker';

const {store} = getStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <AppRoute path={'/about'} component={About}/>
        <AppRoute path={'/main'} component={Main}/>
        <AppRoute path={'/users'} component={Users}/>
        <AppRoute path={'/counter'} component={Counter}/>
        <AppRoute path={'/'} component={Home}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
