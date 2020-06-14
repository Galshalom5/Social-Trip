import React, { useState, useEffect } from 'react'
import { MDBContainer, MDBDataTable } from 'mdbreact'
import { db } from '../index'


const SubscribersMangment = () => {

  const [members, setmembers] = useState([])


  var wantsToSign = []
  const data = {
    columns: [
      {
        label: 'שם',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'שם משפחה',
        field: 'lastname',
        sort: 'asc',
        width: 220
      },
      {
        label: 'טלפון',
        field: 'phoneNumber',
        sort: 'asc',
        width: 150
      },
      {
        label: 'אימייל',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'כתובת מגורים',
        field: 'address',
        sort: 'asc',
        width: 200
      },
      {
        label: 'מוסד לימודים',
        field: 'school',
        sort: 'asc',
        width: 150
      },
      {
        label: 'מסלול לימודים',
        field: 'curriculum',
        sort: 'asc',
        width: 150
      },
      {
        label: 'מדוע מעוניין להשתתף',
        field: 'why',
        sort: 'asc',
        width: 200
      },
      {
        label: 'ציפיות',
        field: 'expectaions',
        sort: 'asc',
        width: 200
      },
      {
        label: 'בא עם רכב',
        field: 'vehicle',
        sort: 'asc',
        width: 50
      },
      {
        label: 'מוכן לקחת טרמפ',
        field: 'tremp',
        sort: 'asc',
        width: 50
      },
      {
        label: 'מקומות פנויים ברכב',
        field: 'availbleSeats',
        sort: 'asc',
        width: 50
      },
    ],

    rows: members

  }


  useEffect(() => {
    db.collection('wantsToSign').get()
    .then(snapshot => {
      snapshot.forEach(elements => {
        
      })
    })
  })



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