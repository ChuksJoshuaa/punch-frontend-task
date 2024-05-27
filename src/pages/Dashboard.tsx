import React from "react";
import { Hero, MarketPlace, Groove, Technical, Crew, Risk} from "../components";

const dashboard = () => {
  return (
    <React.Fragment>
      <Hero />
      <MarketPlace />
      <Groove />
      <Technical />
      <Crew />
      <Risk />
    </React.Fragment>
  );
};

export default dashboard;
