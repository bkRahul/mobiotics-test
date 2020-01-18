import React from "react";
import classes from "./ItemDesc.module.css";

const ItemDesc = () => {
  return (
    <div className={classes.Container}>
      <h3>Milk Food</h3>
      <p>.Milk Fod Rich Milk</p>
      <p>1l</p>
      <p>
        MRP <span>498</span>
      </p>
      <p>
        Rs. <span>300</span>
      </p>
    </div>
  );
};

export default ItemDesc;
