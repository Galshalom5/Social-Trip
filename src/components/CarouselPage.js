import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";





const CarouselPage = (state) =>{
const { imagesArray } = state
const NumOfImages = state.imagesArray.map((item, index) =>{
  return (
    <MDBCarouselItem itemId={index+1}>
    <MDBView>
      <img
        className="d-block w-100"
        src={item.imageUrl}
        alt={item.alt}
      />
    </MDBView>
  </MDBCarouselItem>
  )
})

return (
  <MDBContainer>
    <MDBCarousel
      activeItem={1}
      length={imagesArray.length}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        {NumOfImages}
      </MDBCarouselInner>
    </MDBCarousel>
  </MDBContainer>
)
}






export default CarouselPage;