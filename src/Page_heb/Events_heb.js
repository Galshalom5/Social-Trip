import React, { Component } from "react";
import {
  MDBContainer,
  MDBMask,
  MDBView,
  MDBCardGroup,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import FooterPage from "../components/footer.js";
import CardsD from "../components/CardsD";
import Style from "../css/CardStyle.module.css";
import "../css/index.css";
import { db } from "../index";

class Events extends Component {
  /// New State PrevEventsData - line 50 |||| Read and pass correct list - newsection + lines 130 ,135 ||  correct audience read - line 65
  state = {
    eventsData: [
      // {
      //   imageUrl: "https://www.pnz.co.il/Photos/articles/natural-travelers.jpg",
      //   title: "מגלים את הקסם של שפלת יהודה ",
      //   date: "22/9/2020",
      //   audience: "פתוח לכולם",
      //   description:
      //     " בימים טרופים אלה בהם ההתבודדות היא מצוות הטבע, וההתייחדות היא מצוות ההגנה על היחיד חיפשתי וגם הכי נהנים מהאוכל הכי טוב שיש לאיזור להציע תטעמים מדהימים ומרקמים מדהימים. מתאים לאוכלי כשר. ",
      //   fullDesc:
      //     "ההגבלות על איסור התרחקות מהבית נעלמו ועל פניו נראה כי השגרה חזרה לחיינו, למעט המסכה אותה כל אזרח חייב לעטות על פניו, אפשר לראות את הסוף לסגר הנורא הזה. אחרי שבועות רבים בהם נאלצנו להיות מסוגרים בבית - ארזתי תיק גב, טרמוס מים חמים, כוסות חד פעמים, מהקפה הטעים שאני שומר למסעות מעין אלה וביקשתי מבת זוגתי להתלוות אלי.לאן? מכאן. לא במרחק גדול ממרכז הארץ, אבל במקום הכי הכי שאנחנו יכולים להיות לבד, אני והיא, היא ואני. הבטחתי, הנעתי את הרכב ונסענו.פחות משעה נסיעה, לכיוון בית שמש, ואנחנו כבר מחוץ למתחם השוקק חיים של אוכלוסייה חיה בצפיפות ורועשת. ניגודיות שתבלוט עוד יותר כאשר נכנס למעבה היער.",
      // },
      // {
      //   imageUrl: "https://www.pnz.co.il/Photos/articles/Avshalom-Cave.jpg",
      //   title: "טיול באחת המערות היפות בישראל ",
      //   date: "15/7/2020",
      //   audience: "תלמידי תיכון",
      //   description:
      //     "מערת הנטיפים שוכנת בהרי יהודה ליד העיר בית שמש. המערה היא שמורת טבע מרהיבה ואחת המערות היפות בישראלי. בתוך המערה נוצרו במשך מיליוני שנים נטיפים בצורות שונות חלקן מזכירות מקומות ומבנים מפורסמים בעולם.",
      //   fullDesc:
      //     'מערת הנטיפים מוגדרת כשמורת טבע שמנוהלת על יד רשות הטבע והגנים כרטיס הכניסה למערה כולל סיור (של כ- 30 דקות) בתוך מערת הנטיפים וכן סרטון / מיצג מרתק בו הסבר על אופן גילוי המערה בשנת 1968, תהליך יצירת הנטיפים שקורה עם מפגש של מים, פחמן דו-חמצני ושאריות של אבן גיר. וכן אומדן גילה ההיסטורי של המערה.   הסיור בתוך המערה מלווה במדריך מטעם רשות הטבע שיספר לכם על היווצרותם של נטיפים, ויראה לכם את אותם הנטיפים הדומים במראה שלהם למבנים מפורסמים. כך תוכלו לצפות בנטיפים המזכירים בצורתם אוזני פיל, נטיפים שכמעט התחברו יחד וזכו לכינוי "רומיאו ויוליה" וכד.',
      // },
      // {
      //   imageUrl: "https://firebasestorage.googleapis.com/v0/b/socialtrip-f5408.appspot.com/o/eventsImages%2F0b1b7ea1-020f-4be5-b2c1-fd217621c984.jpg?alt=media&token=f23d04ad-6ec7-4290-86b9-2142e7f505cd",
      //   title: "עוצרים לאכול מהמטעמים של פרחה",
      //   date: "3/11/2020",
      //   audience: "חרדים בלבד",
      //   description:
      //     "דגל חיל הצנחנים מתנופף בגאווה לצד דגל מדינת ישראל, הדגלים נראים בברור מהכביש שמוביל אל-עבר ימת הכנרת דרך המושבה מגדל. בכניסה ניצב מכל צד דקל תמיר, ברוכים הבאים לנחלה בטבע הקסום..",
      //   fullDesc:
      //     "אוכל דרוזי מבוסס על חומרי גלם פשוטים, רובם זמינים ליד הבית. בנחלה בטבע מרב הגידולים נעשים בנחלה ופרחה אשתו של קאסם אחראית על המטבח הדרוזי המשובח של המשפחה, עלי גפן ממולאים, חומוס טרי, קובה , פיתות דרוזיות, מנסף כבש, מקלובה, ירקות מוחמצים, זיתים כבושים, מיצים טבעיים של פסיפלורה, תאנים ועוד.",
      // },
    ],
    prevEventsData: [],
  };

  componentDidMount() {
    let date;
    var eventsDocs = [];
    db.collection("events")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          date = doc.data().date;
          date = date.toString().split("-").reverse().join("-");
          eventsDocs.push({
            imageUrl: doc.data().url,
            title: doc.data().eventName,
            date: date,
            audience: doc.data().audiance,
            description: doc.data().shortDescription,
            fullDesc: doc.data().fullDescription,
          });
        });
        this.setState({ ...this.state, eventsData: eventsDocs });
      });
    /// new section ----------------------------------------------
    var prevEventsDocs = [];
    db.collection("PrevEvents")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          date = doc.data().date;
          date = date.toString().split("-").reverse().join("-");
          prevEventsDocs.push({
            imageUrl: doc.data().url,
            title: doc.data().eventName,
            date: date,
            audience: doc.data().audiance,
            description: doc.data().shortDescription,
            fullDesc: doc.data().fullDescription,
            isPrev: true,
          });
        });
        this.setState({ ...this.state, prevEventsData: prevEventsDocs });
      });
  } //---------------------------------------------------------------------------------

  render() {
    return (
      <div>
        <MDBView className="bgevent">
          <MDBMask
            overlay="stylish-light"
            className="flex-center flex-center flex-column text-white text-center"
          ></MDBMask>
        </MDBView>
        <main>
          <MDBView>
            <MDBCard
              color="#e65100 orange darken-4"
              text="white"
              className="text-center mainCard"
            >
              <MDBCardBody>
                <figure className="figure">
                  <h2 className="h2-responsive font-weight-normal text-center card_style">
                    "אדם אינו אלא תבנית נוף מולדתו"
                  </h2>
                  <figcaption className="figure-caption text-left fig_style">
                    ש.טשרניחובסקי
                  </figcaption>
                </figure>
              </MDBCardBody>
            </MDBCard>
          </MDBView>
          <MDBContainer className="text-center  my-5">
            <h2 className="text-right e">מסעות</h2>
            <p className="text-right">
              ישראל מדינה בעלת חופי ים מרהיבים, שמורות טבע, מסלולי טיולים,
              עתיקות, ערים קדושות לכל הדתות, מוזיאונים מרתקים, חיי לילה תוססים
              ועוד. ישראל היא מדינה קטנה שבין הנקודה הכי צפונית שלה (הר החרמון)
              לבין הנקודה הכי דרומית שלה (אילת) מפרידים כ- 480 קילומטרים בלבד.
            </p>
            <hr className={Style.outside}></hr>
            <p></p>
            <MDBCardGroup>
              <CardsD eventsArr={this.state.eventsData} />
            </MDBCardGroup>
            <hr className={Style.outside}></hr>
            <h2 className="text-right">מסעות קודמים</h2>
            <hr className={Style.outside}></hr>
            <CardsD eventsArr={this.state.prevEventsData}  />
          </MDBContainer>
        </main>
        <FooterPage />
      </div>
    );
  }
}

export default Events;
