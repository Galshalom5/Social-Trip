import React, { useState, useEffect, useRef } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBDataTable,
  MDBPopoverBody,
  MDBInput,
  MDBPopover,
  MDBRow,
} from "mdbreact";
import { db } from "../index";
import "../css/popover.css";
import saveAs from "file-saver";
const SubscribersMangment = () => {
  const [members, setmembers] = useState([]);
  const [csvlist, setcsv] = useState([]);
  const IdRef = useRef(null);
  var wantsToSign = [];
  var csvArray = [];

  const data = {
    columns: [
      {
        label: "שם המסע/סיור",
        field: "tripName",
        sort: "asc",
        width: 170,
      },
      {
        label: "שם",
        field: "name",
        sort: "asc",
        width: 120,
      },
      {
        label: "שם משפחה",
        field: "lastname",
        sort: "asc",
        width: 160,
      },
      {
        label: "טלפון",
        field: "phoneNumber",
        sort: "asc",
        width: 180,
      },
      {
        label: "אימייל",
        field: "email",
        sort: "asc",
        width: 200,
      },
      {
        label: "צפייה בכל הפרטים",
        field: "details",
        sort: "asc",
        width: 170,
      },
      {
        label: "מחק",
        field: "delete",
        width: 80,
      },
    ],

    rows: members,
  };

  function handleExport() {
    const csv = convertTableToCSV(csvlist);

    var blob = new Blob(
      [
        new Uint8Array([0xef, 0xbb, 0xbf]), // UTF-8 BOM
        "Text",
        csv,
      ],
      { type: "text/plain;charset=utf-8" }
    );

    saveAs(blob, "data.csv");
  }
  const deleteHandler = (e) => {
    IdRef.current = e.target.id;
    db.collection("wantsToSignin")
      .doc(`${e.target.id}`)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
        var tempArr = wantsToSign.filter((item)=>{
          return item.id != IdRef.current;
        })
        setmembers(tempArr);
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  function convertTableToCSV(json3) {
    const items = json3;
    const replacer = (key, value) => (value === null ? " " : value); // specify how you want to handle null values here
    const header = Object.keys(items[0]);
    let csv = items.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    csv.unshift(header.join(","));
    csv = csv.join("\r\n");
    return csv;
  }
  const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };
  useEffect(() => {
    db.collection("wantsToSignin")
      .get()
      .then((snapshot) => {
        snapshot.forEach((elements) => {
          var address = "כתובת: " + elements.data().address;
          var school = "מוסד לימודים: " + elements.data().school;
          var curriculum = "מסלול:" + elements.data().curriculum;
          var age = "גיל:" + elements.data().age;
          var why = "מדוע אתה מעוניין להשתתף: " + elements.data().why;
          var expec = "הציפיות: " + elements.data().expectaions;
          var car = "מגיע עם רכב:" + elements.data().vehicle;
          var tremp = "מעונין לקחת עוד אנשים:" + elements.data().tremp;
          var avbseat = "מקום פנוי:" + elements.data().availbleSeats;

          csvArray.push({
            שםמסע: elements.data().eventName,
            שםפרטי: elements.data().name,
            שםמשפחה: elements.data().lastName,
            מסטלפון: elements.data().phoneNumber,
            אימייל: elements.data().email,
            כתובת: elements.data().address,
            מכללה: elements.data().school,
            מסלול: elements.data().curriculum,
            גיל: elements.data().age,
            מדועבחרת: elements.data().why,
            ציפיות: elements.data().expectaions,
            רכב: elements.data().vehicle,
            טרמפ: elements.data().tremp,
            מקומותפנויים: elements.data().availbleSeats,
          });
          wantsToSign.push({
            id : elements.id,
            delete: (
              <MDBBtn
                size="sm"
                color="danger"
                className="text-white"
                id={`${elements.id}`}
                onClick={deleteHandler}
              >
                מחק
              </MDBBtn>
            ),
            tripName: elements.data().eventName,
            name: elements.data().name,
            lastname: elements.data().lastName,
            phoneNumber: elements.data().phoneNumber,
            email: elements.data().email,
            details: (
              <MDBPopover placement="left" popover clickable>
                <MDBBtn size="sm" outline color="blue">
                  פרטים נוספים
                </MDBBtn>
                <div>
                  <MDBPopoverBody>
                    {address}
                    <br />
                    {age}
                    <br />
                    {school}
                    <br />
                    {curriculum}
                    <br />
                    {why}
                    <br />
                    {expec}
                    <br />
                    {car}
                    <br />
                    {tremp}
                    <br />
                    {avbseat}
                  </MDBPopoverBody>
                </div>
              </MDBPopover>
            ),
          });
        });

        setmembers(wantsToSign);
        setcsv(csvArray);
      });
  }, []);

  return (
    <MDBContainer style={{ backgroundColor: "white" }}>
      <MDBDataTable
        entriesLabel="מספר הערכים בטבלה"
        paginationLabel={["הקודם", "הבא"]}
        infoLabel={["מראה", "עד", "מתוך", "ערכים"]}
        className="text-right justify-content-center myTable"
        searchLabel="חיפוש"
        btn
        scrollY
        maxHeight="65vh"
        striped
        bordered
        small
        data={data}
        autoWidth={false}
      />
      <MDBRow className="justify-content-center">
        <MDBBtn color="blue" onClick={handleExport}>
          ייצא לקובץ
        </MDBBtn>
      </MDBRow>
    </MDBContainer>
  );
};

export default SubscribersMangment;
