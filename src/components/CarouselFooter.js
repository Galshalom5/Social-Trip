import React from "react";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBTestimonial,
  MDBAvatar,
  MDBCol,
} from "mdbreact";

const getCol = (state) => {
  const { feedBack } = state;
  return feedBack.map((item, index) => {
    return (
      <MDBCol className="align-top" style={{ display: "inline-block" }} md="3">
        <MDBTestimonial className="top">
          <MDBAvatar style={{ width: "100px" }} className="mx-auto">
            <i className="fas fa-user-circle fa-4x"></i>
          </MDBAvatar>
          <h6 style={{ textAlign: "center" }} className="font-weight-bold mt-4">
            {" "}
            {item.data().name}
          </h6>
          <p style={{ textAlign: "center" }} className="font-weight-normal">
            {item.data().feedBackTxt}
          </p>
        </MDBTestimonial>
      </MDBCol>
    );
  });
};

const getCaruselItem = (colArr) => {
  var ItemsArr = [];
  var fourCol = [];
  colArr.forEach((element, index) => {
    fourCol.push(element);
    if ((index + 1) % 4 === 0 || (fourCol && index + 1 === colArr.length)) {
      ItemsArr.push(
        <MDBCarouselItem
          key={Math.ceil((index + 1) / 4)}
          itemId={Math.ceil((index + 1) / 4)}
        >
          {fourCol.map((item, index) => {
            return item;
          })}
        </MDBCarouselItem>
      );
      fourCol = [];
    }
  });
  return ItemsArr;
};

const CarouselFooter = (state) => {
  var arr = getCaruselItem(getCol(state));
  console.log(arr.length);
  return (
    <div>
      <MDBContainer style={{ marginTop: "6rem" }}>
        <MDBCarousel
          activeItem={1}
          length={arr.length}
          showControls={true}
          slide={true}
          multiItem
          testimonial
          showIndicators={true}
        >
          <MDBCarouselInner>{arr}</MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};

export default CarouselFooter;
