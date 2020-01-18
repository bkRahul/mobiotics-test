import React from 'react';
import Items from './containers/Items/Items';
import classes from './App.module.css';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div className={classes.App}>
      <Items />
      <Checkout />
    </div>
  );
}

export default App;
