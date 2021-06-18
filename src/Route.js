import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import HomePage from './pages/Home';
import TotalCoinPage from './pages/TotalCoin';

const Router = () => {
  const history = useHistory();
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/totalcoin" exact component={TotalCoinPage} />
    </div>
);
};

export default Router;
