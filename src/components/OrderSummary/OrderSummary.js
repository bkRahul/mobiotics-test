import React from "react";

import Button from "../Ui/Button/Button";
import classes from "./OrderSummary.module.css";

const OrderSummary = props => {
  const styles = {
    textTransform: "uppercase"
  };

const filteredItems = props.items.filter(item => {
  return item.qty !== 0
})

  // const itemsSummary = Object.keys(props.items).map(igKey => {
  //   return (
  //     <div key={igKey} className="d-flex df-space-bet">
  //       <div>
  //         <b style={styles}>{props.items[igKey].brandName}</b>
  //         <p>{props.items[igKey].productName}</p>
  //       </div>
  //       <div>: {props.items[igKey].qty}</div>
  //     </div>
  //   );
  // });

  const itemsSummary = filteredItems.map(item => {
    return (
      <div key={item.id} className="d-flex df-space-bet">
        <div>
          <b style={styles}>{item.brandName}</b>
          <p>{item.productName}</p>
        </div>
        <div>: {item.qty}</div>
      </div>
    );
  });

  return (
    <div className={classes.Container}>
      <h3 className="text-center">Your Order</h3>

      <div>{itemsSummary}</div>
      <br />
      <div>
        <b>Total Items</b>: {props.cartQty}
      </div>
      <div>
        <b>Total Price</b>: {props.cartTotal}
      </div>
      <br />
      <p className="text-center">Continue to checkout ?</p>
      <br />
      <div className="text-center">
        <Button btnType="Success" clicked={props.purchaseContinue}>
          CONTINUE
        </Button>
        <Button btnType="Danger" clicked={props.purchaseCancel}>
          CANCEL
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
