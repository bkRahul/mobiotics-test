import React from "react";
import classes from "./ItemImg.module.css";

const ItemImg = props => {
  return (
    <div className={classes.ImgContainer}>
      <img src={props.img} className={classes.Img} />
      <span className={classes.Offer}>{props.offer}</span>
    </div>
  );
};

export default ItemImg;
