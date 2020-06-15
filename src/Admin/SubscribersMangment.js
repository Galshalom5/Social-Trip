import React, { useState, useEffect } from 'react'
import { MDBContainer, MDBDataTable, MDBBtn} from 'mdbreact'
import { db } from '../index'


const SubscribersMangment = () => {

  const [members, setmembers] = useState([])
  var wantsToSign = []
  var registerList

  const data = {
    columns: [
      {
        label: 'שם המסע/סיור',
        field: 'tripName',
        sort: 'asc',
        width: 170
      },
      {
        label: 'שם',
        field: 'name',
        sort: 'asc',
        width: 120
      },
      {
        label: 'שם משפחה',
        field: 'lastname',
        sort: 'asc',
        width: 160
      },
      {
        label: 'טלפון',
        field: 'phoneNumber',
        sort: 'asc',
        width: 180
      },
      {
        label: 'אימייל',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'צפייה בכל הפרטים',
        field: 'details',
        sort: 'asc',
        width: 170
      },
      
    ],

    rows: members

  }


  useEffect(() => {
    db.collection('wantsToSignin').get()
    .then(snapshot => {
      registerList = snapshot
      snapshot.forEach(elements => {
        wantsToSign.push({
          tripName: elements.data().eventName,
          name: elements.data().name,
          lastname: elements.data().lastName,
          phoneNumber: elements.data().phoneNumber,
          email: elements.data().email,
          details: <MDBBtn gradient="blue">פרטים נוספים</MDBBtn>
        })
      })
      console.log(wantsToSign)
      setmembers(wantsToSign)
    })
  }, [])



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

    </MDBContainer>
  )
}

export default SubscribersMangment;