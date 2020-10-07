import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rolldice from './components/Roll Dice component/rolldice'
import Coinflip from './components/Coin Flip Component/coinflip'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Rolldice />
        </Route>
        <Route exact path="/coin">
    <Coinflip />
    </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
