import React, { Component } from "react";
import { db } from "../index";
import $ from "jquery";
import Resizer from "react-image-file-resizer";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBBtn,
  MDBFileInput,
} from "mdbreact";
import GalleryTable from "./Components/GalleryTable.js";
import "../css/Admin.css";
import { storage } from "../index";
import SpinnerPage from "./Components/SpinnerPage";

class GalleryMangment extends Component {
  state = {
    modal17: false,
    filePath: "",
    fileName: "",
    loading: false,
    Pictures: [],
  };

  deletePicture = (name) => {
    const storageRef = storage.ref();
    const imageRef = storageRef.child(`CaruselPhotos/${name}`);
    const thumbnailsRef = storageRef.child(`CaruselPhotos/thumbnails/${name}`);
    imageRef
      .delete()
      .then(() => {
        thumbnailsRef
          .delete()
          .then(() => {
            this.setState({
              Pictures: this.state.Pictures.filter((item, index) => {
                if (name != item.imageName) {
                  return item;
                }
              }),
            });
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  addPicture = (picture) => {
    const storageRef = storage.ref();
    const imagesRef = storageRef.child(`CaruselPhotos/${picture.name}`);
    const thumbnailsRef = storageRef.child(
      `CaruselPhotos/thumbnails/${picture.name}`
    );
    $(".GalleryForm")[0].classList.remove("was-validated");
    imagesRef.put(picture).then((snapshot) => {
      imagesRef.getDownloadURL().then((url) => {
        this.setState({
          Pictures: [
            ...this.state.Pictures,
            { imageUrl: url, imageName: picture.name },
          ],
        });
        console.log("Uploaded file to CaruselPhotos");
        Resizer.imageFileResizer(
          picture,
          350,
          250,
          "JPEG",
          55,
          0,
          (uri) => {
            thumbnailsRef.put(uri).then((snapshot) => {
              console.log("Uploaded file to thumbnails");
              this.setState({
                ["modal17"]: !this.state["modal17"],
                loading: false,
              });

            });
          },
          "blob"
        );
      });
    });
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  fetchData = () => {
    const storageRef = storage.ref();
    const imagesRef = storageRef.child("CaruselPhotos");
    imagesRef.listAll().then((res) => {
      res.items.forEach((element) => {
        element.getDownloadURL().then((url) => {
          console.log("set new state");
          this.setState({
            Pictures: [
              ...this.state.Pictures,
              { imageUrl: url, imageName: element.name },
            ],
          });
        });
      });
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  submitHandler = (file) => {
    if ($(".GalleryForm")[0].checkValidity()) {
      this.setState({
        loading: true,
      });
      this.addPicture(file);
    }
    $(".GalleryForm")[0].classList.add("was-validated");
  };

  render() {
    const { fileName } = this.state;
    let file = null;

    file = fileName ? <span>{fileName}</span> : <span>אנא בחר תמונה</span>;
    return (
      <MDBContainer>
        <GalleryTable
          deletePicture={this.deletePicture}
          toggle={this.toggle}
          Pictures={this.state.Pictures}
        />
        <MDBModal
          position="left-top"
          isOpen={this.state.modal17}
          toggle={this.toggle(17)}
        >
          {this.state.loading ? <SpinnerPage className ='spinner'/> :<div>   <MDBModalHeader dir="rtl">הוסף תמונה</MDBModalHeader>
          <MDBModalBody>
            <form noValidate className="needs-validation GalleryForm">
              <div className="input-group">
                <div className="input-group-prepend"></div>
                <div className="custom-file">
                  <input
                    type="file"
                    required
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    onChange={(event) =>
                      this.setState({
                        filePath: event.target.files[0],
                        fileName: event.target.files[0].name,
                      })
                    }
                  />
                  <div className="invalid-tooltip">נא העלה קובץ</div>

                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    {file}
                  </label>
                </div>
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="danger" onClick={this.toggle(17)}>
              סגור
            </MDBBtn>
            <MDBBtn
              onClick={() => {
                this.submitHandler(this.state.filePath);
              }}
              color="warning"
            >
              העלה תמונה
            </MDBBtn>
          </MDBModalFooter></div> }
       
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default GalleryMangment;
