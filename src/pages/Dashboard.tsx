import React from "react";
import {
  Hero,
  MarketPlace,
  Groove,
  Technical,
  Crew,
  Risk,
  Questions
} from "../components";

const dashboard = () => {
  return (
    <React.Fragment>
      <Hero />
      <MarketPlace />
      <Groove />
      <Technical />
      <Crew />
      <Risk />
      <Questions />
    </React.Fragment>
  );
};

export default dashboard;
