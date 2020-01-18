import React from "react";
import { ItemControls } from "./ItemControls/ItemControls";
import ItemDesc from "./ItemDesc/ItemDesc";
import ItemImg from "./ItemImg/ItemImg";

const Item = props => {
  let item = props.items.map(item => {
    return (
      <div className="d-flex">
        <ItemImg img={item.img} offer={item.offer} />
        <div>
          <ItemDesc
            bName={item.brandName}
            pName={item.productName}
            qty={item.quantity}
            price={item.price}
            mrp={item.mrp}
          />
          <ItemControls />
        </div>
      </div>
    );
  });

  return <div className="d-flex df-col">{item}</div>;
};

export default Item;
