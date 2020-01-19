import React from "react";
import Button from "../../../Ui/Button/Button";

const ItemQtyControl = props => {
  return (
    <div className="d-flex">
      <Button btnType="Qty" clicked={props.removeItem}>-</Button>
      <p>{props.qty}</p>
      <Button btnType="Qty" clicked={props.addItem} >+</Button>

    </div>
  );
};

export default ItemQtyControl;
