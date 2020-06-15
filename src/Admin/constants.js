export const navItems = [
  {
    title: "עריכת האתר",
    children: [
      {
        title: "ניהול פידבקים",
        route: "/AdminRoute/FeedBackTable",
      },
      {
        title: "ניהול אירועים",
        route: "/AdminRoute/EventsTable",
      },
      {
        title: "ניהול גלריה",
        route: "/AdminRoute/GalleryTable",
      },
    ],
  },
  {
    title: "נרשמים למסעות",
    children: [
      {
        title: "ניהול נרשמים",
        route: "/AdminRoute/SubscribersMangment",
      },
    ],
  },
  {
    title: "ניהול הודעות",
    children: [
      {
        title: "ניהול כל ההודעות",
        route: "/AdminRoute/ContactUsMangment",
      },
    ],
  },
];

const DarkBlue = "#000066";
const White = "#ffffff";
const Black = "#000";
const Red = "#ff0000";

export const theme = {
  navBackground: "#e2e2e7",
  theme: {
    homeLinkColor: Black,
    listItemHeadingColor: DarkBlue,
    listItemHeadingArrowColor: DarkBlue,
    subListItemTextColor: Black,
    subListItemHeadingColor: Black,
    subListItemHeadingArrowColor: Red,
    hover: {
      subListItemBackgroundOnHover: DarkBlue,
      subListItemColorOnHover: White,
    },
  },
};
