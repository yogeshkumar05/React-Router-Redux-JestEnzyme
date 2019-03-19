import React from 'react';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import User from './containers/UserContainer';
import About from './components/About';
import Home from './components/Home';
import store from './store';
import '../styles/index.scss';

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <div>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            {/* <Route path="/user/:userId" component={User}/> */}
            <Route path="/user/" component={User}/>
         </div>
      </BrowserRouter>
   </Provider>,
document.getElementById('container'),
);