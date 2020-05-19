import React, { Component } from 'react';
import CarouselPage from './components/CarouselPage';
import { storage } from './index'


//var storageRef = firebase.storage().ref()
// var carouselPhotos = storageRef.child('CaruselPhotos')
 class Gallery extends Component {

  getImages() { 
    const storageRef = storage.ref()
    const imagesRef = storageRef.child('CaruselPhotos')
    imagesRef.listAll()
    .then((res) => {
      console.log(res)
      res.items.forEach(element => {
      console.log(element.toString())
      

      element.getDownloadURL()
      .then((url) => {
        this.state.images.push({imageUrl: url})
      })
      });
    })
    }



  state = { 
    images:
    [
      {imageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg', alt: 'First Slide'},
      {imageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg', alt: 'Second Slide'},
      {imageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg', alt: 'Third Slide'}
      
    ]
  }

componentDidMount() {
  console.log("Gallery componentDidMount")
  this.getImages()
}


  render() {
    console.log("Gallery Render")
    return (
      <div>
        <CarouselPage imagesArray={this.state.images}/>
        
      </div>
    )
  }
}

export default Gallery