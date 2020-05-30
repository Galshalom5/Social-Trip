import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../Lightbox.css";
import LightBoxStyle from "../Lightbox.module.css";
import { storage } from "../index";

class LightboxPage extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [],
  };

  componentDidMount() {
    const storageRef = storage.ref();
    const imagesRef = storageRef.child("CaruselPhotos");
    imagesRef.listAll().then((res) => {
      res.items.forEach((element) => {
        element.getDownloadURL().then((url) => {
          console.log("set new state");
          this.setState({
            images: [...this.state.images, { imageUrl: url }],
          });
        });
      });
    });
  }

  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return images.map((imageSrc) => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="4" key={photoIndex}>
          <MDBView>
            <figure>
              <div className={LightBoxStyle.aaa}>
                <img
                  src={imageSrc.imageUrl}
                  alt="Gallery"
                  className={`img-fluid z-depth-1 ${LightBoxStyle.sameSize}`}
                  onClick={() =>
                    this.setState({ photoIndex: privateKey, isOpen: true })
                  }
                />
              </div>
            </figure>
          </MDBView>
        </MDBCol>
      );
    });
  };

  render() {
    console.log("render LightBox");
    const { photoIndex, isOpen, images } = this.state;
    return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox">
          <MDBRow>{this.renderImages()}</MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].imageUrl}
            nextSrc={images[(photoIndex + 1) % images.length].imageUrl}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].imageUrl
            }
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default LightboxPage;
