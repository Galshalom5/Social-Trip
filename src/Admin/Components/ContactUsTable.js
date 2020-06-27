import React from "react";
import {
  MDBDataTable,
  MDBContainer,
  MDBBtn,
  MDBModalFooter,
  MDBModalHeader,
  MDBModal,
} from "mdbreact";
import { useEffect, useState, useRef } from "react";
import { db } from "../../index";

const ContactUsTable = () => {
  const [open, setopen] = useState(false);
  const contactUsIdRef = useRef(null);
  const [messages, setmessages] = useState([]);

  const objArray = [];
  const data = {
    columns: [
      {
        label: "שם כותב ההודעה",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "זמן שליחת ההודעה",
        field: "time",
        sort: "asc",
        width: 270,
      },
      {
        label: "תאריך שליחת ההודעה",
        field: "date",
        sort: "asc",
        width: 270,
      },
      {
        label: "נושא ההודעה",
        field: "subject",
        sort: "asc",
        width: 270,
      },
      {
        label: "תוכן ההודעה",
        field: "messageval",
        sort: "asc",
        width: 270,
      },
      {
        label: "מחק פידבק",
        field: "delete",
        sort: "asc",
        width: 100,
      },
    ],

    rows: messages,
  };

  const areYouSure = (message) => {
    contactUsIdRef.current = message.target.id;
    setopen(true);
  };

  const deleteHandler = () => {
    db.collection("ContactUs")
      .doc(`${contactUsIdRef.current}`)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
        setopen(false);
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  const toTime = (timestamp) => {
    var num = timestamp * 1000;
    var date = new Date(num);

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formatted = hours + ":" + minutes.substr(-2);
    return formatted;
  };
  const toDate = (timestamp) => {
    var num = timestamp.seconds * 1000;
    var date = new Date(num);

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var formattedate = day + "/" + month + "/" + year;

    return formattedate;
  };

  useEffect(() => {
    db.collection("ContactUs")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((item) => {
          objArray.push({
            name: item.data().name,
            email: item.data().email,
            subject: item.data().subject,
            messageval: item.data().message,
            time: toTime(item.data().date),
            date: toDate(item.data().date),
            delete: (
              <MDBBtn
                size="sm"
                outline
                color="danger"
                id={`${item.id}`}
                onClick={areYouSure}
              >
                מחק
              </MDBBtn>
            ),
          });
        });
        setmessages(objArray);
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
          האם למחוק את ההודעה?
        </MDBModalHeader>
        <MDBModalFooter className="justify-content-center">
          <MDBBtn color="danger" onClick={() => setopen(false)}>
            ביטול
          </MDBBtn>
          <MDBBtn color="danger" onClick={deleteHandler}>
            מחק
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ContactUsTable;
