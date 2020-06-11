import React, { Component } from "react";
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
} from "mdbreact";

class FeedBackTable extends Component {
  render() {
    const { feedBack } = this.props;
    return (
      <MDBContainer>
        <MDBTable>
          <MDBTableHead>
            <tr className="text-right">
              <th>מס׳ פידבק</th>
              <th>שם כותב הפידבק</th>
              <th> תוכן הפידבק</th>
              <th>
                <MDBBtn outline color="warning" onClick={this.props.toggle(16)}>
                  הוסף
                </MDBBtn>
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {feedBack.map((item, index) => {
              return (
                <tr key={item.id} className="text-right">
                  <td>{index + 1}</td>
                  <td>{item.data().name}</td>
                  <td>{item.data().feedBackTxt}</td>
                  <td>
                    <MDBBtn
                      key={item.id}
                      onClick={() => this.props.deleteFeedBack(item.id)}
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

export default FeedBackTable;
