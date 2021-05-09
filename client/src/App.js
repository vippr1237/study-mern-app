import React from 'react';
import AppNavbar from './components/AppNavbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Home from './components/Home'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <div>
    <Router>
      <div className="App">
      <AppNavbar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Portfolio}/>
      </Switch>
      </div>
    </Router>
    <footer className="page-footer font-small blue pt-4">
    <div class="footer-copyright text-center py-3">© Copyright:
    <a href="https://github.com/vippr1237"> Coang Hà </a>
    | Web để học MERN Stack
    </div>
    </footer>
    </div>

  );
}

export default App;
