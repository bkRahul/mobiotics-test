import React, { Component } from "react";
import Item from "../../components/Item/Item";

class Items extends Component {

  render() {
    return (
      <div className="container">
          <Item
            addItem={this.addItemHandler}
            removeItem={this.removeItemHandler}
          />
      </div>
    );
  }
}

export default Items;
