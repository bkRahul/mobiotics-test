import React from "react";
import classes from "./ItemDesc.module.css";

const ItemDesc = props => {
  return (
    <div className={classes.Container}>
      <h3>{props.bName}</h3>
      <p>{props.pName}</p>
      <p>{props.qty}</p>
      <p>
        MRP <span>{props.mrp}</span>
      </p>
      <p>
        Rs. <span>{props.price}</span>
      </p>
    </div>
  );
};

export default ItemDesc;
