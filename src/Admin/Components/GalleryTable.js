import React, { Component } from "react";
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
} from "mdbreact";

class GalleryTable extends Component {
  render() {
    const { Pictures } = this.props;
    return (
      <MDBContainer>
        <MDBTable>
          <MDBTableHead>
            <tr className="text-right">
              <th>מס׳ תמונה</th>
              <th> שם התמונה</th>
              <th></th>
              <th>
                <MDBBtn outline color="warning" onClick={this.props.toggle(17)}>
                  הוסף
                </MDBBtn>
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {Pictures.map((item, index) => {
              return (
                <tr key={item.imageName} className="text-right">
                  <td>{index + 1}</td>
                  <td>{item.imageName}</td>
                  <td>
                    <img src={item.imageUrl} width="150" height="100" />
                  </td>
                  <td>
                    <MDBBtn
                      key={item.imageName}
                      onClick={() => this.props.deletePicture(item.imageName)}
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

export default GalleryTable;
