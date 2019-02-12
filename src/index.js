
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import Home from './components/app/home';
import About from './components/app/about';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router>
    <div>
    <Route path="/" component={App}/>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

