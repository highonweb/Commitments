import React from 'react';
import Commitments from './Commitments';
import Dashboard from './Dashboard';
import Home from './Home';
import '../css/nav.css';
import PendingContract from './PendingContracts';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Web3ContextProvider from '../contexts/Web3Context';

function Navbar() {
  return (
    <Router>
      <div className="topnav">
        <Link className="link left" to="/">
          Commitments
        </Link>
        <Link className="link right" to="/Dashboard">
          Dashboard
        </Link>
        <Link className="link right" to="/Explore">
          Explore
        </Link>
        <Link className="link right" to="/PendingContracts">
          Pending Contracts
        </Link>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/Explore">
          <Web3ContextProvider>
            <Commitments />
          </Web3ContextProvider>
        </Route>
        <Route path="/PendingContracts">
          <PendingContract />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
