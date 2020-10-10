import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rolldice from './components/Roll Dice component/rolldice'
import Coinflip from './components/Coin Flip Component/coinflip'
import Home from './components/Home component/home'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/coin">
          <Coinflip />
        </Route>
        <Route exact path="/Rolldice">
          <Rolldice />
        </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
