import React from "react";
import { ItemControls } from "./ItemControls/ItemControls";
import ItemDesc from "./ItemDesc/ItemDesc";
import img from "../../assets/logo192.png";
import classes from "./Item.module.css";

const Item = () => {
  return (
    <div className="d-flex">
      <div className={classes.Img}>
        <img src={img} />
        <span className={classes.Offer}>18% OFF</span>
      </div>
      <div>
        <ItemDesc />
        <ItemControls />
      </div>
    </div>
  );
};

export default Item;
