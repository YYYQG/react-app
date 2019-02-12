import React,{Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/home"/>home</li>
                    <li><Link to="/about"/>about</li>
                </ul>
            </div>
        );
    }
}

export default App;