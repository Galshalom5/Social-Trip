import React from "react";
import {
  MDBDataTable,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBModalFooter,
  MDBModalBody,
  MDBModalHeader,
  MDBModal,
} from "mdbreact";
import { useEffect, useState, useRef } from "react";
import { storage, db } from "../../index";

const EventsTable = () => {
  const [open, setopen] = useState(false);
  const eventNameRef = useRef(null);
  const [events, setevents] = useState([]);
  const objArray = [];
  const data = {
    columns: [
      {
        label: "שם",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "תאריך",
        field: "date",
        sort: "asc",
        width: 270,
      },
      {
        label: "קהל יעד",
        field: "audience",
        sort: "asc",
        width: 200,
      },
      {
        label: "מחק אירוע",
        field: "delete",
        sort: "asc",
        width: 100,
      },
      {
        label: "צפייה בנרשמים",
        field: "participants",
        sort: "asc",
        width: 150,
      },
    ],

    rows: events,
  };

  const areYouSure = (event) => {
    eventNameRef.current = event.target.id;
    setopen(true);
  };

  const deleteHandler = () => {
    db.collection("events")
      .doc(`${eventNameRef.current}`)
      .delete()
      .then(() => alert("האירוע נמחק בהצלחה"));
    setopen(false);
  };

  useEffect(() => {
    let date;
    db.collection("events")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((item) => {
          date = item.data().date;
          date = date.toString().split("-").reverse().join("-");
          objArray.push({
            name: item.data().eventName,
            date: date,
            audience: item.data().audiance,
            delete: (
              <MDBBtn
                size="sm"
                outline
                color="danger"
                id={`${item.data().eventName}`}
                onClick={areYouSure}
              >
                מחק
              </MDBBtn>
            ),
            participants: (
              <MDBBtn
                size="sm"
                outline
                color="green"
                id={`${item.data().eventName}`}
              >
                צפייה בנרשמים
              </MDBBtn>
            ),
          });
        });
        setevents(objArray);
      });
  }, [open]);

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
        maxHeight="40vh"
        striped
        bordered
        small
        data={data}
      />
      <MDBModal isOpen={open} toggle={() => setopen(false)} backdrop={true}>
        <MDBModalHeader>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn outline color="secondary" onClick={() => setopen(false)}>
            ביטול
          </MDBBtn>
          <MDBBtn outline color="primary" onClick={deleteHandler}>
            מחק
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default EventsTable;
