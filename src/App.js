import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SampleForm from './components/SampleForm';
import Show from './components/Show';
// import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Send from './components/Send';
import Display from './components/Display.js';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        
   	<Router >
       <div>
        <Route exact path='/' component={Send}>
        </Route>
        <Route path='/Display' component={Display}>
        </Route>
        </div>
        </Router>        
      </div>
    );
  }
}

export default App;
