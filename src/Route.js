import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/Home';
import TotalCoinPage from './pages/TotalCoin';

const Router = () => {
  
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/totalcoin" exact component={TotalCoinPage} />
    </div>
);
};

export default Router;
