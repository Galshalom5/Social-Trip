import React, { Component } from "react";
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
} from "mdbreact";

class ContactUsTable extends Component {
  render() {
    const { messages } = this.props;
    return (
      <MDBContainer>
        <MDBTable>
          <MDBTableHead>
            <tr className="text-right">
              <th>הודעה מס'</th>
              <th>שעה</th>
              <th>שם השולח</th>
              <th>מייל</th>
              <th>נושא</th>
              <th>הודעה</th>
              <th></th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {messages.map((item, index) => {
              return (
                <tr key={item.id} className="text-right">
                  <td>{index + 1}</td>
                  {<td>{String(item.data().timestamp)}</td>}
                  <td>{item.data().name}</td>
                  <td>{item.data().email}</td>
                  <td>{item.data().subject}</td>
                  <td>{item.data().message}</td>
                  <td>
                    <MDBBtn
                      key={item.id}
                      onClick={() => this.props.deleteMessage(item.id)}
                      outline
                      color="danger"
                    >
                      מחק
                    </MDBBtn>
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    );
  }
}

export default ContactUsTable;
