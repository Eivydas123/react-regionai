import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";
import Filtered from "../components/Filtered";

export default function Countries() {
  const params = useParams();

  const [tab, setTab] = useState(params.region);

  const history = useHistory();

  const countries = useSelector((state) => state.countries);

  const handleTab = (event, newValue) => {
    setTab(newValue);
    history.push(newValue);
  };

  return (
    <>
      <Container maxWidth="lg">
        <AppBar position="relative" color="inherit">
          <Tabs
            value={tab}
            onChange={handleTab}
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab component={Link} to="All" label="All" value="All" />
            {_.uniqBy(countries, "region").map((item, index) => {
              //  console.log(item);
              if (item.region) {
                return (
                  <Tab
                    key={index}
                    component={Link}
                    to={item.region}
                    label={item.region}
                    value={item.region}
                  />
                );
              }
            })}
          </Tabs>
        </AppBar>

        <Filtered filterBy={tab} />
      </Container>
    </>
  );
}
