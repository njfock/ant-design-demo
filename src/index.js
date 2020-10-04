import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App';
import getStore from './store/getStore';
import * as serviceWorker from './serviceWorker';

const {store} = getStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <a href="/">main</a>
      <a href="/home">home</a>
      <a href="/about">about</a>
      <hr/>
      <Switch>
        <Route path="/home">
          Hello home
        </Route>
        <Route path="/about">
          Hello about
        </Route>
        <Route path="/">
          Hello world
        </Route>
      </Switch>
      
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
