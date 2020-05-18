import React, { Component } from 'react';
import CarouselPage from './components/CarouselPage';
import { MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { storage } from './index'
import FooterPage from './footer.js'


 class Gallery extends Component {

  state = { 
    images:
    [
      {imageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg', alt: 'First Slide'},
      {imageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg', alt: 'Second Slide'},
      {imageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg', alt: 'Third Slide'}
    ]
  }
 


  

componentDidMount() {
  const storageRef = storage.ref()
  const imagesRef = storageRef.child('CaruselPhotos')
  imagesRef.listAll()
    .then((res) => {
      res.items.forEach(element => {
      element.getDownloadURL()
      .then((url) => {
        this.setState({
          images : [...this.state.images,{imageUrl: url}],
          })
        })
      })
  })
}


  render() {
    return (
      <div>
      <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
      <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
     </MDBMask>
     </MDBView>
     <main>
       <MDBContainer className="text-center my-5">  
       <CarouselPage imagesArray={this.state.images}/>
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