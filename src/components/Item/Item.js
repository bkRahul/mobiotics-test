import React from "react";
import { ItemControls } from "./ItemControls/ItemControls";
import ItemDesc from "./ItemDesc/ItemDesc";
import ItemImg from "./ItemImg/ItemImg";
import CartContext from "../../context/cart-context";
import classes from "./Item.module.css";

const Item = props => {
  return (
    <div className="d-flex df-col">
      <CartContext.Consumer>
        {context =>
context.items ? (
  context.items.map(item => {
    return (
      <div className={["d-flex", classes.Item].join(" ")} key={item.id}>
        <ItemImg img={item.img} productName={item.productName} offer={item.offer} />
        <div>
          <ItemDesc
            bName={item.brandName}
            pName={item.productName}
            qty={item.quantity}
            price={item.price}
            mrp={item.mrp}
          />
          <ItemControls
            addItem={() => context.addItem(item.id)}
            removeItem={() => context.removeItem(item.id)}
            itemCount={item.qty}
          />
        </div>
      </div>
    );
  })
) : "Loading"
        }
      </CartContext.Consumer>
    </div>
  );
};

export default Item;
