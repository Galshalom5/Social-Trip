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
import FooterPage from "./footer.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import image_1 from "./Images/TimeLine/image_1.jpg";
import image_2 from "./Images/TimeLine/image_2.jpg";
import image_3 from "./Images/TimeLine/image_3.jpg";
import image_4 from "./Images/TimeLine/image_4.jpg";
import TimeLineIcon from "./Images/TimeLine/TimeLineIcon.png";
<<<<<<< HEAD
import "./index.css";
=======
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
class main extends Component {
  state = {
    MainVideoSrc:
      "https://firebasestorage.googleapis.com/v0/b/socialtrip-f5408.appspot.com/o/BackGround%20Video%2FmainVideo.mp4?alt=media&token=24516264-b54d-4689-be09-ba98b174fb1e",
  };

  componentDidMount() {
    //   const storageRef = storage.ref();
    //   const imagesRef = storageRef.child("BackGround Video");
    //   imagesRef.listAll().then((res) => {
    //     res.items.forEach((element, index) => {
    //       element.getDownloadURL().then((url) => {
    //         this.setState({
    //           videoSrc: url,
    //         });
    //         console.log(url);
    //         document.getElementById("videoTag").load();
    //       });
    //     });
    //   });
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
=======
      <div style={{ background: "#607d8b42" }}>
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
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
          <MDBCard
<<<<<<< HEAD
            color="orange lighten-3"
=======
            color="mdb-color lighten-2"
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
            text="white"
            className="text-center"
          >
            <MDBCardBody>
              <h2 className="h2-responsive font-weight-normal text-center my-5">
                מסע חברתי הוא ארגון המחבר בין כמה עולמות
              </h2>
            </MDBCardBody>
          </MDBCard>
          <MDBContainer className="text-center my-5">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  webkiBoxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
                  MozBoxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
                  boxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
                  height: 250,
                  backgroundImage: `url(${image_1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundOrigin: "content-box",
                  backgroundPosition: "center",
                  backgroundSize: 500,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  letterSpacing: "2px",
                  textShadow: "0.5px 0.5px black",
                }}
                contentArrowStyle={{
                  borderRight: "1px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{
                  background: "rgb(255, 248, 220)",
                  color: "rgb(0, 0, 128)",
                  textShadow: "1px 1px white",
                }}
                icon={
                  <MDBIcon
<<<<<<< HEAD
                    style={{ fontSize: "3vw", marginTop: "0.4rem" }}
=======
                  style={{fontSize:'3vw', marginTop: "0.4rem" }}
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
                    icon="hiking"
                  />
                }
              >
                <h3
                  style={{ fontWeight: "500" }}
                  className="vertical-timeline-element-title"
                >
                  20.11.2020
                </h3>
                <h4
                  style={{ fontWeight: "300" }}
                  className="vertical-timeline-element-subtitle"
                >
                  חרדים וערבים יחדיו
                </h4>
                <p>מסע אל לב ליבה של התרבות החרדית והערבית יחדיו</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  webkiBoxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
                  MozBoxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
                  boxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
                  height: 250,
                  backgroundImage: `url(${image_2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundOrigin: "content-box",
                  backgroundPosition: "center",
                  backgroundSize: 500,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  letterSpacing: "2px",
                  textShadow: "0.5px 0.5px black",
                }}
                contentArrowStyle={{
                  borderRight: "1px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{
<<<<<<< HEAD
                  background: "rgb(255, 248, 220)",
                  color: "rgb(0, 0, 128)",
                  textShadow: "1px 1px white",
                }}
                icon={
                  <MDBIcon
                    style={{ fontSize: "3vw", marginTop: "0.4rem" }}
                    icon="hiking"
                  />
                }
=======
                    background: "rgb(255, 248, 220)",
                    color: "rgb(0, 0, 128)",
                    textShadow: "1px 1px white",
                  }}
                  icon={
                    <MDBIcon
                    style={{fontSize:'3vw', marginTop: "0.4rem" }}
                      icon="hiking"
                    />
                  }
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
              >
                <h3
                  style={{ fontWeight: "500" }}
                  className="vertical-timeline-element-title"
                >
                  20.11.2020
                </h3>
                <h4
                  style={{ fontWeight: "300" }}
                  className="vertical-timeline-element-subtitle"
                >
                  חרדים וערבים יחדיו
                </h4>
                <p>מסע אל לב ליבה של התרבות החרדית והערבית יחדיו</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  webkiBoxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
                  MozBoxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
                  boxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
                  height: 250,
                  backgroundImage: `url(${image_3})`,
                  backgroundRepeat: "no-repeat",
                  backgroundOrigin: "content-box",
                  backgroundPosition: "center",
                  backgroundSize: 500,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  letterSpacing: "2px",
                  textShadow: "0.5px 0.5px black",
                }}
                contentArrowStyle={{
                  borderRight: "1px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{
<<<<<<< HEAD
                  background: "rgb(255, 248, 220)",
                  color: "rgb(0, 0, 128)",
                  textShadow: "1px 1px white",
                }}
                icon={
                  <MDBIcon
                    style={{ fontSize: "3vw", marginTop: "0.4rem" }}
                    icon="hiking"
                  />
                }
=======
                    background: "rgb(255, 248, 220)",
                    color: "rgb(0, 0, 128)",
                    textShadow: "1px 1px white",
                  }}
                  icon={
                    <MDBIcon
                    style={{fontSize:'3vw', marginTop: "0.4rem" }}
                      icon="hiking"
                    />
                  }
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
              >
                <h3
                  style={{ fontWeight: "500" }}
                  className="vertical-timeline-element-title"
                >
                  20.11.2020
                </h3>
                <h4
                  style={{ fontWeight: "300" }}
                  className="vertical-timeline-element-subtitle"
                >
                  חרדים וערבים יחדיו
                </h4>
                <p>מסע אל לב ליבה של התרבות החרדית והערבית יחדיו</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  webkiBoxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
                  MozBoxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
                  boxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
                  height: 250,
                  backgroundImage: `url(${image_4})`,
                  backgroundRepeat: "no-repeat",
                  backgroundOrigin: "content-box",
                  backgroundPosition: "center",
                  backgroundSize: 500,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  letterSpacing: "2px",
                  textShadow: "0.5px 0.5px black",
                }}
                contentArrowStyle={{
                  borderRight: "1px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{
<<<<<<< HEAD
                  background: "rgb(255, 248, 220)",
                  color: "rgb(0, 0, 128)",
                  textShadow: "1px 1px white",
                }}
                icon={
                  <MDBIcon
                    style={{ fontSize: "3vw", marginTop: "0.4rem" }}
                    icon="hiking"
                  />
                }
=======
                    background: "rgb(255, 248, 220)",
                    color: "rgb(0, 0, 128)",
                    textShadow: "1px 1px white",
                  }}
                  icon={
                    <MDBIcon
                      style={{fontSize:'3vw', marginTop: "0.4rem" }}
                      icon="hiking"
                    />
                  }
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
              >
                <h3
                  style={{ fontWeight: "500" }}
                  className="vertical-timeline-element-title"
                >
                  20.11.2020
                </h3>
                <h4
                  style={{ fontWeight: "300" }}
                  className="vertical-timeline-element-subtitle"
                >
                  חרדים וערבים יחדיו
                </h4>
                <p>מסע אל לב ליבה של התרבות החרדית והערבית יחדיו</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
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
