import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import FileInput from './FileInput'

 class AdminPage extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow center>
                    <MDBCol lg="5">
                    <FileInput/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default AdminPage