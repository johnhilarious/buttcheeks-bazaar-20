import React from "react";
import RoadmapPhase from "./roadmap/RoadmapPhase";
import RoadmapFooter from "./roadmap/RoadmapFooter";
import { phases } from "./roadmap/roadmapData";

const RoadmapContent = () => {
  return (
    <>
      {phases.map((phase, index) => (
        <RoadmapPhase key={index} phase={phase} />
      ))}
      <RoadmapFooter />
    </>
  );
};

export default RoadmapContent;