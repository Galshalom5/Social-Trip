import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Content, SideNavigation } from "side-navigation-react";
import { navItems, theme } from "./constants";
import { Wrapper } from "./styles";
import GalleryTable from "./Components/GalleryTable.js";
import SubscribersMangment from "./SubscribersMangment.js";
import FeedBackTable from "./Components/FeedBackTable.js";
import ContactUsMangment from "./ContactUsMangment.js";
import EventsTable from "./Components/EventsTable.js";
import PrevEventsTable from "./Components/PrevEventsTable.js"; // new Prev event table  route - line 25!!
import TimelineTable from "./TimeLineTable.js";
const SideNavPage = () => (
  <Container style={{ direction: "rtl", textAlign: "start" }}>
    <Wrapper>
      <SideNavigation
        navItems={navItems}
        navBackground={theme.navBackground}
        theme={theme.theme}
      />
    </Wrapper>
    <Content>
      <Switch>
        <Route path="/AdminRoute/EventsTable" component={EventsTable} />
        <Route path="/AdminRoute/TimelineTable" component={TimelineTable} />
        <Route path="/AdminRoute/PrevEventsTable" component={PrevEventsTable} />
        <Route path="/AdminRoute/GalleryTable" component={GalleryTable} />
        <Route
          path="/AdminRoute/SubscribersMangment"
          component={SubscribersMangment}
        />
        <Route path="/AdminRoute/FeedBackTable" component={FeedBackTable} />
        <Route
          path="/AdminRoute/ContactUsMangment"
          component={ContactUsMangment}
        />
      </Switch>
    </Content>
  </Container>
);

export default SideNavPage;
