import React from "react";

const cartContext = React.createContext({
  cartTotal: 0,
  addItem: () => {},
  removeItem: () => {},
  checkout: () => {}
});

export default cartContext;
