import React from "react";
import { Hero, MarketPlace, Groove, Technical } from "../components";

const dashboard = () => {
  return (
    <React.Fragment>
      <Hero />
      <MarketPlace />
      <Groove />
      <Technical />
    </React.Fragment>
  );
};

export default dashboard;
