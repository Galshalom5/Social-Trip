import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Content, SideNavigation } from "side-navigation-react";
import { navItems, theme } from "./constants";
import { Wrapper } from "./styles";
import UploadEvent from "./Components/EventsTable.js";
import GalleryMangment from "./GalleryMangment.js";
import SubscribersMangment from "./SubscribersMangment.js";
import FeedBackMangment from "./FeedBackMangment.js";
import ContactUsMangment from "./ContactUsMangment.js";
import EventsTable from "./Components/EventsTable.js";

const SideNavPage = () => (
  <Container style={{ direction: "rtl" }}>
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
        <Route path="/AdminRoute/GalleryMangment" component={GalleryMangment} />
        <Route
          path="/AdminRoute/SubscribersMangment"
          component={SubscribersMangment}
        />
        <Route
          path="/AdminRoute/FeedBackMangement"
          component={FeedBackMangment}
        />
        <Route
          path="/AdminRoute/ContactUsMangment"
          component={ContactUsMangment}
        />
      </Switch>
    </Content>
  </Container>
);

export default SideNavPage;
