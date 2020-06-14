import React, { Component } from "react";
import { MDBContainer, MDBMask, MDBView, MDBCard, MDBCardBody } from "mdbreact";
import FooterPage from "../components/footer.js";
import "../css/index.css";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <MDBView className="bgaboutus">
          <MDBMask
            overlay="stylish-light"
            className="flex-center flex-column text-white text-center"
          ></MDBMask>
        </MDBView>
        <main>
          <MDBCard
            color="#e65100 orange darken-4"
            text="white"
            className="text-center mainCard"
          >
            <MDBCardBody>
              <figure className="figure">
                <h2 className="h2-responsive font-weight-normal text-center my-5 card_style">
                  "אדם אינו אלא תבנית נוף מולדתו"
                </h2>
                <figcaption className="figure-caption text-left fig_style">
                  ש.טשרניחובסקי
                </figcaption>
              </figure>
            </MDBCardBody>
          </MDBCard>
          <MDBContainer className="text-center my-5">
            <h1 className="h_style">,מסע חברתי</h1>
            <h2 className="h_style">
              {" "}
              מפגש אנושי פשוט ומחבר במרחבי הטבע, עבור שבטים שונים בחברה הישראלית
            </h2>

            <h3 className="text-right">:רקע</h3>
            <p className="text-right">
              "מסע חברתי", נוצר ע"י מספר יזמים, סטודנטים בעבר ובהווה, אנשי חינוך
              וחברה. קבוצה אשר הבחינה כי במהלך תקופת הלימודים האקדמית נוצר חלון
              הזדמנויות חברתי בו חולקים מגזרים שונים בחברה הישראלית מרחב פיזי
              ואינטלקטואלי צעיר ומפרה. מתוך הבנה כי בחברה ישראלית שסועה ומפולגת
              יש צורך במפגש היכרות אנושי ופנימי, הכולל דרך משותפת במרחבי המדבר
              ויצרת תחושה והבנה בשותפות לדרך, הן במימד הפנימי והן במימד החברתי
              על מנת לבנות יחדיו תהליך הבראה חברתי רחב. על כן הקמנו את תכנית
              ה"מסע חברתי".
            </p>
            <h3 className="text-right">:החזון</h3>
            <p className="text-right">
              חזוננו הוא כי בעזרת שימוש בכלי המסע, נבנה יחדיו רשת חברתית שתיזום,
              תלמד, תטייל ותייצר שפה חדשה מכילה ובריאה בחברה הישראלית. אנו
              פועלים להרחב את גיוון קהל המשתתפים, על מנת להפגיש עוד ועוד
              אוכלוסיות שונות בחברה הלומדים יחדיו במוסדות אקדמיה, והחינוך השונות
              ברחבי הארץ בעזרת בניית קשר עם אגודות הסטודנטים השונות ברחבי הארץ.
              לטווח הרחוק אנו שואפים ש"מסע חברתי" יהפוך לחלק בלתי נפרד מתכנית
              הלימודים האקדמי ויאפשר נקודת זכות למשתתפים בו, יהווה פלטפורמה
              נוספת למפגשים בין התלמידים של אותם מורים שהשתתפו בתכנית כפרחי
              הוראה. בהמשך החזון הוא כי המסע ישמש גם כמודל למפגש בין קצוות
              נוספות בחברה הישראלית, חרדים, מתנחלים, חילונים, בדואים, ועוד.
            </p>
            <h3 className="text-right">:מטרות</h3>
            <p className="text-right">
              מטרתנו היא יצירת מפגש אנושי והקמת קהילה חברתית רחבה, הפיכת משתתפיה
              לשגרירי סובלנות הממיסים כל אחד בקהילתו את חומות הבורות ושבירת
              הסטראוטיפים החברתיים. ליווי הקהילה וחבריה ומינוף הקשרים לטובת
              לימוד, יוזמה ועשייה משותפת בתחומי החברה, החינוך והתרבות . ליווי
              הקבוצה והעשרתה בסדנאות, מפגשי תוכן, הרצאות וטיולים.
            </p>
            <h3 className="text-right">:רציונאל</h3>
            <p className="text-right">
              המסע מתקיים במרחבי המדבר, מקום עירום הרחק משאון העיר, וטרדות היום
              יום, לטובת התבוננות חברתית מחודשת. שימוש בכלים יצירתיים בעבודה עם
              גוף נפש ורוח באמצעות טיול רגלי, סדנאות הקשבה ושיח, התבוננות
              ונשימה, בשילוב תראפיה באומנות יצירה ומשחק. שילוב זה, מאפשר מפגשי
              לב משמעותי ועמוק בין המשתתפים, בינם לבין עצמם ובינם אל בין האחר.
            </p>
          </MDBContainer>
        </main>
        <FooterPage />
      </div>
    );
  }
}

export default AboutUs;
