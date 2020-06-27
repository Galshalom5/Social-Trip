import React from "react";
import {
  MDBDataTable,
  MDBContainer,
  MDBBtn,
  MDBModalFooter,
  MDBModalHeader,
  MDBModal,
  MDBModalBody,
  MDBInput,
} from "mdbreact";
import { useEffect, useState, useRef } from "react";
import { db } from "../index";
import "../css/Admin.css";
import autosize from "autosize";

const TimeLineTable = () => {
  autosize(document.querySelector("textarea"));
  const [open, setopen] = useState(false);
  const eventIdRef = useRef(null);
  const [eventDate, setDate] = useState("");
  const [eventTitle, setTitle] = useState("");
  const [eventContent, setContent] = useState("");
  const [timeLineEvents, setEvents] = useState([]);
  const [modalIsOpen, setmodalIsOpen] = useState({ index: 1 });
  const objArray = [];
  const data = {
    columns: [
      {
        label: "תאריך אירוע",
        field: "date",
        sort: "asc",
        width: 80,
      },
      {
        label: "כותרת",
        field: "title",
        sort: "asc",
        width: 100,
      },
      {
        label: "תוכן",
        field: "content",
        sort: "asc",
        width: 270,
      },
      {
        label: "ערוך אירוע",
        field: "edit",
        width: 100,
      },
    ],
    rows: timeLineEvents,
  };

  const editModal = (event) => {
    var x = event.target.closest("tr").querySelectorAll("td");
    eventIdRef.current = event.target.id;
    setDate(x[0].innerHTML.split("/").reverse().join("-"));
    setTitle(x[1].innerHTML);
    setContent(x[2].innerHTML);
    setopen(true);
  };

  const editHandler = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains("was-validated"))
      event.target.className += "was-validated";
    if (event.target.checkValidity()) {
      db.collection("TimeLineEvents")
        .doc(`${eventIdRef.current}`)
        .update({
          date: eventDate.split("-").reverse().join("/"),
          title: eventTitle,
          content: eventContent,
        })
        .then(function () {
          console.log("Document successfully updated!");
          setopen(false);
        })
        .catch(function (error) {
          console.error("Document was not update : ", error);
        });
    }
  };

  useEffect(() => {
    db.collection("TimeLineEvents")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((item) => {
          objArray.push({
            date: item.data().date,
            title: item.data().title,
            content: item.data().content,
            edit: (
              <MDBBtn
                size="sm"
                outline
                color="primary"
                id={`${item.id}`}
                onClick={editModal}
              >
                ערוך אירוע
              </MDBBtn>
            ),
          });
        });
        setEvents(objArray);
      })
      .catch((error) => {
        console.error("unable to fetch data : ", error);
      });
  }, [open, modalIsOpen]);

  return (
    <MDBContainer style={{ backgroundColor: "white" }}>
      <MDBDataTable
        entriesLabel="מספר הערכים בטבלה"
        paginationLabel={["הקודם", "הבא"]}
        infoLabel={["מראה", "עד", "מתוך", "ערכים"]}
        className="text-right justify-content-center"
        searchLabel="חיפוש"
        btn
        scrollY
        maxHeight="65vh"
        striped
        bordered
        small
        data={data}
      />
      <MDBModal
        isOpen={open}
        toggle={() => setopen(false)}
        backdrop={true}
        size="md"
      >
        <MDBModalHeader
          style={{ backgroundColor: "" }}
          className="justify-content-center"
        >
          ערוך את האירוע
        </MDBModalHeader>
        <form className="needs-validation" noValidate onSubmit={editHandler}>
          <MDBModalBody style={{ maxHeight: "130vh" }}>
            <MDBInput
              className="text-right"
              required
              value={eventDate}
              labelClass="col text-right"
              label="תאריך האירוע"
              className={"col text-right"}
              type="date"
              getValue={(e) => {
                setDate(e);
              }}
            >
              <div className="invalid-feedback">חובה להכניס תוכן</div>
            </MDBInput>
            <MDBInput
              required
              dir="rtl"
              maxLength="70"
              type="text"
              value={eventTitle}
              labelClass="col text-right"
              label="כותרת האירוע"
              className={"col text-right"}
              getValue={(e) => {
                setTitle(e);
              }}
            >
              <div className="invalid-feedback">חובה להכניס תוכן</div>
            </MDBInput>
            <MDBInput
              required
              dir="rtl"
              rows={2}
              resize="none"
              maxLength={70}
              type="textarea"
              labelClass="col text-right"
              label="תוכן האירוע"
              value={eventContent}
              className={"col text-right"}
              getValue={(e) => {
                setContent(e);
              }}
            >
              <div className="invalid-feedback">חובה להכניס תוכן</div>
            </MDBInput>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn color="secondary" onClick={() => setopen(false)}>
              ביטול
            </MDBBtn>
            <MDBBtn type="submit" color="primary">
              סיים
            </MDBBtn>
          </MDBModalFooter>
        </form>
      </MDBModal>
    </MDBContainer>
  );
};

export default TimeLineTable;
