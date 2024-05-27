import React from "react";
import { Hero, MarketPlace, Groove, Technical, Crew } from "../components";

const dashboard = () => {
  return (
    <React.Fragment>
      <Hero />
      <MarketPlace />
      <Groove />
      <Technical />
      <Crew />
    </React.Fragment>
  );
};

export default dashboard;
