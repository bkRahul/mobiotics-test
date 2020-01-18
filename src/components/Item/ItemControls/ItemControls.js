import React from "react";
import Button from "../../Ui/Button/Button";
import ItemQtyControl from "./ItemQtyControl/ItemQtyControl";

export const ItemControls = () => {
  return (
    <div className="d-flex df-wrap">
      <Button btnType="Cart">Add To Cart</Button>
      <ItemQtyControl />
    </div>
  );
};
