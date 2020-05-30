import React, { Component } from "react";
<<<<<<< HEAD
import { MDBContainer, MDBMask, MDBView, MDBCardGroup } from "mdbreact";
import FooterPage from "./footer.js";
import CardsD from "./CardsD";
import Style from "./CardStyle.module.css";
import "./index.css";

class Events extends Component {
  state = {
    eventsData: [
      {
        imageUrl:
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg",
        title: "במדבר",
        date: "12/12/12",
        audience: "פתוח לכולם",
        description: "פלאות , חקלאות הררית קדומה ומעיינות מרעננים.	",
      },
      {
        imageUrl:
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg",
        title: "טיול שנתי",
        date: "12/12/12",
        audience: "תלמידי תיכון",
        description:
          " שינה במדברטיול בהרי ירושלים, עם תצפיות נפלאות , חקלאות הררית קדומה ומעיינות מרעננים.	",
      },
      {
        imageUrl:
          "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg",
        title: "צפון",
        date: "12/12/12",
        audience: "חרדים בלבד",
        description:
          "צפון בכנרתטיול בהרי ירושלים, עם תצפיות נפלאות , חקלאות הררית קדומה ומעיינות מרעננים. כל מיני דברים חדשים	",
      },
      // {imageUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg', title: 'צפון' , date: '12/12/12' , audience: 'חרדים בלבד' , description: 'צפון בכנרתטיול בהרי ירושלים, עם תצפיות נפלאות , חקלאות הררית קדומה ומעיינות מרעננים. כל מיני דברים חדלשחיכח	'},
    ],
    title: "Welcom",
  };

  render() {
    const title = "welcome";
    return (
      <div>
        <MDBView className="bgevent">
          <MDBMask
            overlay="orange-light"
=======
import { MDBContainer, MDBMask, MDBView } from "mdbreact";
import FooterPage from "./footer.js";
class Events extends Component {
  render() {
    return (
      <div>
        <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
          <MDBMask
            overlay="purple-light"
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
            className="flex-center flex-column text-white text-center"
          ></MDBMask>
        </MDBView>
        <main>
<<<<<<< HEAD
          <MDBContainer className="text-center my-5">
            <h2 className="text-right">מסעות</h2>
            <p className="text-right">
              המסע מתקיים במרחבי המדבר, מקום עירום הרחק משאון העיר, וטרדות היום
              יום, לטובת התבוננות חברתית מחודשת. שימוש בכלים יצירתיים בעבודה עם
              גוף נפש ורוח באמצעות טיול רגלי, סדנאות הקשבה ושיח, התבוננות
              ונשימה, בשילוב תראפיה באומנות יצירה ומשחק. שילוב זה, מאפשר מפגשי
              לב משמעותי ועמוק בין המשתתפים, בינם לבין עצמם ובינם אל בין האחר.
            </p>
            <hr className={Style.outside}></hr>
            <p></p>
            <MDBCardGroup>
              <CardsD title={title} eventsArr={this.state.eventsData} />
            </MDBCardGroup>
            <hr className={Style.outside}></hr>
            <h2 className="text-right">מסעות קודמים</h2>
            <hr className={Style.outside}></hr>
            <CardsD eventsArr={this.state.eventsData} />
          </MDBContainer>
=======
          <MDBContainer className="text-center my-5"></MDBContainer>
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
        </main>
        <FooterPage />
      </div>
    );
  }
}

export default Events;
