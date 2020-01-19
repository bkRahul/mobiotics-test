import React, { Component } from "react";

import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} modalClosed={this.props.clicked} />
        <div
          className={classes.Modal}
          style={
            this.props.show
              ? { transform: "translateY(0)", opacity: "1" }
              : { transform: "translateY(-100vh)", opacity: "0" }
          }
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
