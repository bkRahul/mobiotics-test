import React, { Component } from "react";
import Item from "../../components/Item/Item";

class Items extends Component {
  state = {
    items: null
  };

  componentDidMount() {
    fetch("../../data/data.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          items: data
        });
        console.log(this.state.items);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.items ? <Item items={this.state.items} /> : "Error"}
      </div>
    );
  }
}

export default Items;
