import React from 'react';
import { MDBDataTable, MDBContainer, MDBIcon, MDBBtn, MDBModalFooter, MDBModalBody, MDBModalHeader, MDBModal, MDBRow } from 'mdbreact';
import { useEffect, useState, useRef } from 'react'
import { storage, db } from '../../index'
import UploadEvent from '../UploadEvent'

const EventsTable = () => {
    const [open, setopen] = useState(false)
    const eventNameRef = useRef(null)
    const imageNameRef = useRef(null)
    const [events, setevents] = useState([])
    const [modalIsOpen, setmodalIsOpen] = useState({ index: 1 })
    const objArray = []
    const data = {
        columns: [
            {
                label: 'שם',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'תאריך',
                field: 'date',
                sort: 'asc',
                width: 270
            },
            {
                label: 'קהל יעד',
                field: 'audience',
                sort: 'asc',
                width: 200
            },
            {
                label: 'מחק אירוע',
                field: 'delete',
                sort: 'asc',
                width: 100
            },
            {
                label: 'צפייה בנרשמים',
                field: 'participants',
                sort: 'asc',
                width: 150
            },
        ],

        rows: events


    };

    const areYouSure = (event) => {
        
        eventNameRef.current = event.target.id
        setopen(true)
    }

    const deleteHandler = () => {
        var imageUrl
        db.collection('events').doc(`${eventNameRef.current}`).delete()
            .then(() => {
                db.collection('events').doc(`${eventNameRef.current}`).get()
                .then(snapshot => {
                    console.log(snapshot.data())
                imageUrl = snapshot.data().url

                // storage.refFromURL(imageUrl)
                // .then(ref => {
                //     ref.delete()
                //     .then(() =>{
                //         alert('האירוע נמחק בהצלחה')
                //         setopen(false)
                //     })
                // })
                })

            })
    }

    useEffect(() => {
        console.log(modalIsOpen)
        let date
        db.collection('events').get()
            .then(querySnapshot => {
                querySnapshot.forEach(item => {
                    date = item.data().date
                    date = date.toString().split("-").reverse().join("-")
                    objArray.push({
                        name: item.data().eventName,
                        date: date,
                        audience: item.data().audiance,
                        delete: <MDBBtn size="sm" outline color="danger" id={`${item.data().eventName}`} onClick={areYouSure} >מחק</MDBBtn>,
                        participants: <MDBBtn size="sm" outline color="blue" id={`${item.data().eventName}`} >צפייה בנרשמים</MDBBtn>
                    })
                })
                setevents(objArray)
            })
    }, [open, modalIsOpen])

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
            <MDBModal isOpen={open} toggle={() => setopen(false)}
                backdrop={true}
                size="sm"
            >
                <MDBModalHeader style={{ backgroundColor: "#ff4444" }} className="text-white justify-content-center" >האם למחוק את האירוע?</MDBModalHeader>
                <MDBModalFooter className="justify-content-center">
                    <MDBBtn color="danger" onClick={() => setopen(false)}>ביטול</MDBBtn>
                    <MDBBtn outline color="danger" onClick={deleteHandler}>מחק</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
            <MDBRow className="text-center">
                <UploadEvent value={(i) => setmodalIsOpen({ index: i })} />
            </MDBRow>
        </MDBContainer>
    );
}

export default EventsTable;