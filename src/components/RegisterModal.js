// import React, { useState, useEffect } from 'react'
// import {
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBCardTitle,
//     MDBCardText,
//     MDBRow,
//     MDBCol,
//     MDBContainer,
//     MDBBtn,
//     MDBModal,
//     MDBCardGroup,
//     MDBInput,
//     MDBIcon
// } from "mdbreact";

// const RegisterModal = (props) => {





//     const hander = (e) => {
//         e.preventDefault()
//         alert(name)
//     }

//     return (
//         // <div>
//         <MDBContainer>
//             <MDBModal        // new
//                 size="lg"

//                 isOpen={signModalIsOpen}
//                 toggle={() => setSignModalIsOpen(false)}
//                 style={{
//                     overlay: {
//                         backgroundColor: "rgba(0,0,0,0.4)",
//                     },

//                 }}
//             >

//                 {/* <h2 style={{ color: "black" }}>הרשמה למסע</h2>
//                 <h3 style={{ color: "black" }}>{titleRef.current}</h3>
//                 <h4 style={{ color: "black" }}> {dateRef.current}</h4> */}


//                 <MDBRow >
//                     <MDBCol md="11" >

//                         <form
//                             onSubmit={hander}
//                         >
//                             <div className="grey-text text-right  "  >
//                                 <MDBInput
//                                     required
//                                     icon="user"
//                                     type="text"
//                                     labelClass="col text-right ml-0"
//                                     label="שם"
//                                     className="col text-right"
//                                     getValue={(e) => setName(e, console.log(e))}
//                                 />


//                                 <MDBInput
//                                     required
//                                     icon="fa fa-id-card"
//                                     type="text"
//                                     labelClass="col text-right ml-0"
//                                     label="שם משפחה"
//                                     className="col text-right"
//                                     getValue={(e) => setName(e, console.log(e))}
//                                 />

//                                 <MDBInput
//                                     required
//                                     icon="fa fa-phone"
//                                     type="text"
//                                     labelClass="col text-right ml-0"
//                                     label="פלאפון"
//                                     className="col text-right"
//                                     getValue={(e) => setName(e, console.log(e))}
//                                 />

//                                 <MDBInput
//                                     required
//                                     icon="envelope"
//                                     type="email"
//                                     labelClass="col text-right ml-0"
//                                     label="מייל"
//                                     className="col text-right"
//                                     getValue={(e) => setName(e, console.log(e))}
//                                 />

//                                 <MDBInput
//                                     required
//                                     icon="fa fa-building"
//                                     type="text"
//                                     labelClass="col text-right ml-0"
//                                     label="מקום מגורים"
//                                     className="col text-right"
//                                     getValue={(e) => setName(e, console.log(e))}
//                                 />

//                                 <MDBInput
//                                     required
//                                     icon="fa fa-graduation-cap"
//                                     type="text"
//                                     labelClass="col text-right ml-0"
//                                     label="מוסד לימודים"
//                                     className="col text-right"
//                                     getValue={(e) => setName(e, console.log(e))}
//                                 />

//                                 <MDBInput
//                                     required
//                                     icon="fa fa-graduation-cap"
//                                     type="text"
//                                     labelClass="col text-right ml-0"
//                                     label="מסלול לימודים"
//                                     className="col text-right"
//                                     getValue={(e) => setName(e, console.log(e))}
//                                 />

//                                 <MDBInput
//                                     required
//                                     icon="tag"
//                                     type="textarea"
//                                     rows="2"
//                                     labelClass="col text-right ml-0"
//                                     label="מדוע אתה מעוניין להשתתף במסע"
//                                     className="col text-right"
//                                     getValue={(e) => setName(e, console.log(e))}
//                                 />

//                                 <MDBInput
//                                     required
//                                     icon="pencil-alt"
//                                     type="textarea"
//                                     rows="2"
//                                     labelClass="col text-right ml-0"
//                                     label="מה הציפיות שלך ממסע שכזה?"
//                                     className="col text-right"
//                                     getValue={(e) => setName(e, console.log(e))}
//                                 />

//                             </div>


//                             <div dir="rtl" className="text-right">
//                                 {/* Default inline 1 */}
//                                 <div class="custom-control custom-checkbox custom-control-inline">
//                                     <input type="checkbox" class="custom-control-input" id="defaultInline1" />
//                                     <label class="custom-control-label" for="defaultInline1">מגיע עם רכב</label>
//                                 </div>

//                                 {/* Default inline 2 */}
//                                 <div class="custom-control custom-checkbox custom-control-inline">
//                                     <input type="checkbox" class="custom-control-input" id="defaultInline2" />
//                                     <label class="custom-control-label" for="defaultInline2">האם תהיה מעוניין לקחת טרמפ משתתפים אחרים?</label>
//                                 </div>


//                                 <div class="custom-control custom-checkbox custom-control-inline">
//                                     <select className="browser-default custom-select">
//                                         <option>מספר מקומות פנויים</option>
//                                         <option value="1"> 1</option>
//                                         <option value="2"> 2</option>
//                                         <option value="3"> 3</option>
//                                         <option value="4"> 4</option>
//                                     </select>
//                                 </div>



//                             </div>


//                             <div className="text-center">
//                                 <MDBBtn outline type="submit" color="secondary">
//                                     שלח
//             <MDBIcon far icon="paper-plane" className="ml-1" />
//                                 </MDBBtn>
//                             </div>
//                         </form>
//                     </MDBCol>
//                 </MDBRow>


//             </MDBModal>

//         </MDBContainer>
//         // </div>

//     )
// }

// export default RegisterModal
