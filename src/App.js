import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rolldice from './components/Roll Dice component/rolldice'
import Coinflip from './components/Coin Flip Component/coinflip'
import Home from './components/Home component/home'
import Footer from './components/Footer Component /footer'
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
    <Footer />
    </Router>
    </>
  );
}

export default App;
