import React, { Component } from "react";
import classes from "./Checkout.module.css";
import Button from "../../components/Ui/Button/Button";
import CartContext from "../../context/cart-context";

class Checkout extends Component {
  render() {
    const style = {
      "paddingLeft":"20px"
    }
    return (
      <div className={[classes.Container, "d-flex df-space-bet"].join(" ")}>
        <CartContext.Consumer>
          {context => (
            <React.Fragment>
            <div style={style}>
              <div className={classes.White}>Qty: {context.cartQty}</div>
              <div className={classes.White}>Total: {context.cartTotal}</div>
            </div>
        <div>
          <Button btnType="Cart" clicked={context.checkout} >Checkout</Button>
        </div>
        </React.Fragment>
         )}
        </CartContext.Consumer>
      </div>
    );
  }
}

export default Checkout;
