import React, { Component } from "react";
import { MDBBtnFixed, MDBBtnFixedItem } from "mdbreact";

class ButtonPage extends Component {
  state = {
    buttonStyle: {
      transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
      opacity: "0",
    },
  };

  onHover = () => {
    this.setState({
      buttonStyle: {
        transform: "scaleY(1) scaleX(1) translateY(0) translateX(0)",
        opacity: "1",
      },
    });
  };

  onMouseLeave = () => {
    this.setState({
      buttonStyle: {
        transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
        opacity: "0",
      },
    });
  };

  render() {
    return (
      <section style={{ height: "1000px" }}>
        <MDBBtnFixed
          onMouseEnter={this.onHover}
          onMouseLeave={this.onMouseLeave}
          floating
          size="lg"
          color="red"
          icon="pencil-alt"
          style={{ bottom: "45px", right: "24px" }}
        >
          <MDBBtnFixedItem
            buttonStyle={this.state.buttonStyle}
            color="red"
            icon="star"
          />
          <MDBBtnFixedItem
            buttonStyle={this.state.buttonStyle}
            color="yellow"
            icon="user"
          />
          <MDBBtnFixedItem
            buttonStyle={this.state.buttonStyle}
            color="green"
            icon="envelope"
          />
          <MDBBtnFixedItem
            buttonStyle={this.state.buttonStyle}
            color="blue"
            icon="shopping-cart"
          />
        </MDBBtnFixed>
      </section>
    );
  }
}

export default ButtonPage;
