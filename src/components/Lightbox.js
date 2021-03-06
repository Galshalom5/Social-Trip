import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../css/Lightbox.css";
import LightBoxStyle from "../css/Lightbox.module.css";
import { storage } from "../index";
import ModalLoader from "../Admin/Components/LoaderModal";

class LightboxPage extends React.Component {
  state = {
    isLoaded: false,
    photoIndex: 0,
    isOpen: false,
    imagesSmall: [],
    images: [],
  };

  componentDidMount() {
    const storageRef = storage.ref();
    const imagesRef = storageRef.child("CaruselPhotos/thumbnails");
    const imageBigRef = storageRef.child("CaruselPhotos");

    imagesRef.listAll().then(async (res) => {
      for (const element of res.items) {
        await element.getDownloadURL().then((url) => {
          this.setState({
            imagesSmall: [...this.state.imagesSmall, { imageUrl: url }],
          });
        });
      }
      this.setState({ ...this.state, isLoaded: true });
    });

    imageBigRef.listAll().then(async (res) => {
      for (const element of res.items) {
        await element.getDownloadURL().then((url) => {
          this.setState({
            images: [...this.state.images, { imageUrl: url }],
          });
        });
      }
    });
  }

  renderImages = () => {
    let photoIndex = -1;
    const { imagesSmall } = this.state;

    return imagesSmall.map((imageSrc) => {
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
    const { photoIndex, isOpen, images } = this.state;
    return (
      <div>
        <MDBContainer
          className={`mt-5 ${
            this.state.isLoaded === true ? "" : "cancelPointers"
          }`}
        >
          <div className="mdb-lightbox">
            <MDBRow>{this.renderImages()}</MDBRow>
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex].imageUrl}
              nextSrc={images[(photoIndex + 1) % images.length].imageUrl}
              prevSrc={
                images[(photoIndex + images.length - 1) % images.length]
                  .imageUrl
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
        {this.state.isLoaded === true ? (
          ""
        ) : (
          <ModalLoader isLightBox={this.state.isLoaded} />
        )}
      </div>
    );
  }
}

export default LightboxPage;
