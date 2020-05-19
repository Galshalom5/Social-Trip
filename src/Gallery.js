import React, { Component } from 'react';
import CarouselPage from './components/CarouselPage';
import { MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { storage } from './index'
import FooterPage from './footer.js'
import Lightbox from './components/Lightbox';


 class Gallery extends Component {



  render() {
    console.log("render Gallery")
    return (
      <div>
      <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
      <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
     </MDBMask>
     </MDBView>
     <main>
       <MDBContainer className="text-center my-5">  
       {/* <CarouselPage imagesArray={this.state.images}/> */}
       <Lightbox/>
       </MDBContainer>
     </main> 
     <footer>  
     <FooterPage/>
     </footer>
     </div>
    )
  }
}

export default Gallery