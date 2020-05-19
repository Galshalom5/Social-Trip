import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../Lightbox.css";

class LightboxPage extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
    'https://firebasestorage.googleapis.com/v0/b/socialtrip-f5408.appspot.com/o/CaruselPhotos%2Ftest2.jpg?alt=media&token=8d2c2a5e-b6b2-4002-80cf-500955be6b57',
    'https://firebasestorage.googleapis.com/v0/b/socialtrip-f5408.appspot.com/o/CaruselPhotos%2FScreen%20Shot%202020-03-03%20at%2021.35.36.png?alt=media&token=f910da96-0821-40eb-9d80-4d68463bec9e',
    'https://firebasestorage.googleapis.com/v0/b/socialtrip-f5408.appspot.com/o/CaruselPhotos%2Fwin.jpeg?alt=media&token=3353aa7d-a642-464d-afcf-e4c44c96b6f6'
  ]
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

return images.map(imageSrc => {
  photoIndex++;
  const privateKey = photoIndex;
  return (
    <MDBCol md="4" key={photoIndex} >
      <figure>
        <img src={imageSrc} alt="Gallery" className="img-fluid"  onClick={()=>
        this.setState({ photoIndex: privateKey, isOpen: true })
        }
        />
      </figure>
    </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox no-margin">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default LightboxPage;