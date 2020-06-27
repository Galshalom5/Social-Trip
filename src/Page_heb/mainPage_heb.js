import React, { Component } from "react";
import {
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBSmoothScroll,
  MDBAnimation,
} from "mdbreact";
import FooterPage from "../components/footer.js";
import TimeLine from "../components/TimeLine";
import "../css/index.css";
import { db, storage } from "../index";

class main extends Component {
  state = {
    timeLineEvents: [],
    timeLinePhotos: [],
    MainVideoSrc:
      "https://firebasestorage.googleapis.com/v0/b/socialtrip-f5408.appspot.com/o/BackGround%20Video%2FmainVideo.mp4?alt=media&token=24516264-b54d-4689-be09-ba98b174fb1e",
  };

  componentDidMount() {
    const storageRef = storage.ref();
    const imagesRef = storageRef.child("TimeLinePhotos");
    imagesRef.listAll().then((res) => {
      res.items.forEach((element) => {
        element.getDownloadURL().then((url) => {
          this.setState({
            timeLinePhotos: [...this.state.timeLinePhotos, url],
          });
        });
      });
    });

    db.collection("TimeLineEvents")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((item, index) => {
          this.setState({
            timeLineEvents: [...this.state.timeLineEvents, item],
          });
        });
      });
  }

  render() {
    return (
      <div>
        <MDBView>
          <video width="100%" id="videoTag" autoPlay loop muted>
            <source src={this.state.MainVideoSrc} type="video/mp4" />
          </video>
          <MDBMask className="flex-center flex-column text-white text-center">
            <MDBAnimation type="rubberBand" duration="4s">
              <MDBSmoothScroll to="mainSection">
                <MDBIcon
                  style={{
                    textShadow: "1px 1px black",
                  }}
                  size="5x"
                  icon="angle-double-down"
                />
                <h2
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "3px",
                    textShadow: "0.5px 0.5px black",
                  }}
                >
                  תראו אותנו
                </h2>
              </MDBSmoothScroll>
            </MDBAnimation>
          </MDBMask>
        </MDBView>
        <main id="mainSection">
          <MDBView>
            <MDBCard
              color="#e65100 orange darken-4"
              text="white"
              className="text-center mainCard"
            >
              <MDBCardBody>
                <figure className="figure">
                  <h2 className="h2-responsive font-weight-normal text-center  card_style">
                    "אדם אינו אלא תבנית נוף מולדתו"
                  </h2>
                  <figcaption className="figure-caption text-left fig_style">
                    ש.טשרניחובסקי
                  </figcaption>
                </figure>
              </MDBCardBody>
            </MDBCard>
          </MDBView>
          <MDBContainer className="text-center my-5">
            <h2 className="text-center h_style"> בואו הצטרפו למסעות הקרובים</h2>
            <TimeLine
              timeLinePhotos={this.state.timeLinePhotos}
              timeLineEvents={this.state.timeLineEvents}
            />
          </MDBContainer>
        </main>
        <footer>
          <FooterPage />
        </footer>
      </div>
    );
  }
}

export default main;
