import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MDBIcon } from "mdbreact";

const getVerticalElement = (state) => {
  var { timeLineEvents } = state;
  const { timeLinePhotos } = state;
  timeLineEvents = timeLineEvents.sort((a, b) => {
    return (
      new Date(a.data().date.split("/").reverse().join("/")) -
      new Date(b.data().date.split("/").reverse().join("/"))
    );
  });
  if (timeLineEvents) {
    return timeLineEvents.map((item, index) => {
      return (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            webkiBoxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
            MozBoxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
            boxShadow: "7px 7px 47px -13px rgba(0,0,0,0.96)",
            height: 250,
            backgroundImage: `url(${timeLinePhotos[index]})`,
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
            borderRight: "0.1px solid  rgb(33, 150, 243)",
          }}
          iconStyle={{
            background: "rgb(226, 226, 231)",
            color: "rgb(67, 74, 85)",
            textShadow: "1px 1px white",
          }}
          icon={
            <MDBIcon
              style={{ fontSize: "3vw", marginTop: "0.4rem" }}
              icon="hiking"
            />
          }
        >
          <h3
            style={{ fontWeight: "500" }}
            className="vertical-timeline-element-title"
          >
            {item.data().date}
          </h3>
          <h4
            style={{ fontWeight: "300" }}
            className="vertical-timeline-element-subtitle"
          >
            {item.data().title}
          </h4>
          <p> {item.data().content} </p>
        </VerticalTimelineElement>
      );
    });
  }
};

const TimeLine = (state) => {
  var verticalElemntArr = getVerticalElement(state);
  return <VerticalTimeline>{verticalElemntArr}</VerticalTimeline>;
};

export default TimeLine;
