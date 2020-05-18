import React, { Component } from "react";
import { db } from "./index";
import CarouselFooter from "./components/CarouselFooter";

class footer extends Component {

    state = {
      feedBack:[],
    }

  



  componentDidMount() {
    db.collection("FeedBack")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((item, index) => {
       this.setState({
         feedBack :[...this.state.feedBack,item],
       })
      });
   });
  }

  render() {
    return <CarouselFooter feedBack={this.state.feedBack} />;
  }
}

export default footer;
