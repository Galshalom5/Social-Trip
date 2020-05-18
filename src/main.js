import React, { Component } from 'react'
import { MDBContainer, MDBMask, MDBView } from 'mdbreact';
import FooterPage from './footer.js'

 class main extends Component {
    render() {
        return (
            <div>
            <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            </MDBMask>
            </MDBView>
            <main>
            <MDBContainer className="text-center my-5">
            </MDBContainer>
            </main>  
            <FooterPage/>       
            </div>
        )
    }
}

export default main;
