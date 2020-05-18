import React from "react";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBTestimonial,
  MDBAvatar,
  MDBIcon,
  MDBCol
} from "mdbreact";

const getCol = (state) => {
const {feedBack} = state;
 return feedBack.map((item, index) => {
  return (
    <MDBCol style={{ display: "inline-block" }} md="3">
      <MDBTestimonial>
        <MDBAvatar style={{ width: "80px" }} className="mx-auto">
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
            alt=""
            className="rounded-circle img-fluid"
          />
        </MDBAvatar>
        <h6 className="font-weight-bold mt-4"> {item.data().name}</h6>
        <p className="font-weight-normal">
          <MDBIcon icon="quote-left" className="pr-2" />
          {item.data().feedBackTxt}
        </p>
      </MDBTestimonial>
    </MDBCol>
  );
})
}

const getCaruselItem = (colArr) => {
var ItemsArr = [];
var fourCol = [];
colArr.forEach((element,index) => {
    fourCol.push(element);
  if((index + 1) % 4 == 0){
    ItemsArr.push(
             <MDBCarouselItem itemId={(index+1) / 4}>
              {fourCol.pop()}
              {fourCol.pop()}
              {fourCol.pop()}
              {fourCol.pop()}
             </MDBCarouselItem>)
             fourCol = [];
    }
})
return ItemsArr;
}

const CarouselFooter = (state) => {
  var arr = getCaruselItem(getCol(state));
  return (
    <div>
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={arr.length}
        showControls={true}
        showIndicators={true}
      >
        <MDBCarouselInner>
        {arr}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </div>
  );
}


export default CarouselFooter;
