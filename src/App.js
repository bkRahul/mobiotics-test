import React, { Component } from "react";
import Items from "./containers/Items/Items";
import classes from "./App.module.css";
import Checkout from "./containers/Checkout/Checkout";
import CartContext from "./context/cart-context";
import Modal from "./components/Ui/Modal/Modal";
import CheckoutSuccess from "./components/CheckoutSuccess/CheckoutSuccess";
import OrderSummary from "./components/OrderSummary/OrderSummary";

class App extends Component {
  state = {
    items: null,
    cartQty: 0,
    cartTotal: 0,
    purchasing: false,
    checkout: false
  };

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/data/data.json`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          items: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updatePurchaseState = tempCart => {
    let updatedCartTotal = Object.keys(tempCart)

      .map(igKey => {
        return tempCart[igKey].total;
      })

      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);

    let updatedCartQty = Object.keys(tempCart)

      .map(igKey => {
        return tempCart[igKey].qty;
      })

      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);

    this.setState({
      cartTotal: updatedCartTotal,
      cartQty: updatedCartQty
    });
  };

  addItemHandler = id => {
    const tempCart = [...this.state.items];
    const selectedProd = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProd);
    const prod = tempCart[index];
    prod.qty = prod.qty + 1;

    prod.total = prod.price * prod.qty;

    this.updatePurchaseState(tempCart);
  };

  removeItemHandler = id => {
    const tempCart = [...this.state.items];

    const selectedProd = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProd);
    const prod = tempCart[index];
    if (prod.qty <= 0) return;
    prod.qty = prod.qty - 1;

    prod.total = prod.total - prod.price;

    console.log(prod.price);

    this.updatePurchaseState(tempCart);
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  purchaseContinueHandler = () => {
    this.setState({
      purchasing: false,
      checkout: true
    });
  };

  checkoutHandler = () => {
    console.log("clicked");
    this.setState({
      purchasing: false,
      checkout: false
    });
  };

  render() {
    let orderSummary,
      checkout = "";
    if (this.state.items) {
      orderSummary = (
        <OrderSummary
          items={this.state.items}
          cartQty={this.state.cartQty}
          cartTotal={this.state.cartTotal}
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      );

      checkout = <CheckoutSuccess purchaseSucess={this.checkoutHandler} />;
    }

    return (
      <div className={classes.App}>
        <Modal
          show={this.state.purchasing}
          clicked={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        <Modal show={this.state.checkout} clicked={this.checkoutHandler}>
          {checkout}
        </Modal>
        <CartContext.Provider
          value={{
            items: this.state.items,
            cartTotal: this.state.cartTotal,
            cartQty: this.state.cartQty,
            addItem: this.addItemHandler,
            removeItem: this.removeItemHandler,
            checkout: this.purchaseHandler
          }}
        >
          <Items />
          <Checkout />
        </CartContext.Provider>
      </div>
    );
  }
}

export default App;
