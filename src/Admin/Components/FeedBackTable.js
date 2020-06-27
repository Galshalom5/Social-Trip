import React from "react";
import {
  MDBDataTable,
  MDBContainer,
  MDBBtn,
  MDBModalFooter,
  MDBModalHeader,
  MDBModal,
  MDBRow,
} from "mdbreact";
import { useEffect, useState, useRef } from "react";
import { db } from "../../index";
import UploadFeedBack from "../UploadFeedBack";

const FeedBackTable = () => {
  const [open, setopen] = useState(false);
  const feedBackIdRef = useRef(null);
  const [feedBacks, setfeedBacks] = useState([]);
  const [modalIsOpen, setmodalIsOpen] = useState({ index: 1 });
  const objArray = [];
  const data = {
    columns: [
      {
        label: "שם כותב הפידבק",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "תוכן הפידבק",
        field: "feedBackTxt",
        sort: "asc",
        width: 270,
      },
      {
        label: "מחק פידבק",
        field: "delete",
        sort: "asc",
        width: 80,
      },
    ],

    rows: feedBacks,
  };

  const areYouSure = (feedBack) => {
    feedBackIdRef.current = feedBack.target.id;
    setopen(true);
  };

  const deleteHandler = () => {
    db.collection("FeedBack")
      .doc(`${feedBackIdRef.current}`)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
        setopen(false);
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  useEffect(() => {
    db.collection("FeedBack")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((item) => {
          objArray.push({
            name: item.data().name,
            feedBackTxt: item.data().feedBackTxt,
            delete: (
              <MDBBtn
                size="sm"
                color="danger"
                className="text-white"
                id={`${item.id}`}
                onClick={areYouSure}
              >
                מחק
              </MDBBtn>
            ),
          });
        });
        setfeedBacks(objArray);
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
        size="sm"
      >
        <MDBModalHeader
          style={{ backgroundColor: "#ff4444" }}
          className="text-white justify-content-center"
        >
          האם למחוק את הפידבק?
        </MDBModalHeader>
        <MDBModalFooter className="justify-content-center">
          <MDBBtn color="danger" onClick={() => setopen(false)}>
            ביטול
          </MDBBtn>
          <MDBBtn outline color="danger" onClick={deleteHandler}>
            מחק
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      <MDBRow className="text-center">
        <UploadFeedBack value={(i) => setmodalIsOpen({ index: i })} />
      </MDBRow>
    </MDBContainer>
  );
};

export default FeedBackTable;
