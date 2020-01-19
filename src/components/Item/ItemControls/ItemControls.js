import React from "react";
import Button from "../../Ui/Button/Button";
import ItemQtyControl from "./ItemQtyControl/ItemQtyControl";

export const ItemControls = props => {
  return (
    <div className="d-flex df-wrap">
      <Button btnType="Cart" clicked={props.addItem} >Add To Cart</Button>
      <ItemQtyControl addItem={props.addItem} removeItem={props.removeItem} qty={props.itemCount} />
    </div>
  );
};
