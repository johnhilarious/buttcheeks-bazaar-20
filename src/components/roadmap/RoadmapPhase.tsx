import React from "react";
import RoadmapSection from "./RoadmapSection";

interface PhaseItem {
  icon: string;
  title: string;
  items?: string[];
  sections?: {
    subtitle: string;
    items: string[];
  }[];
}

interface RoadmapPhaseProps {
  phase: PhaseItem;
}

const RoadmapPhase = ({ phase }: RoadmapPhaseProps) => {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="text-lg font-bold text-dark-accent mb-3 flex items-center gap-2">
        <span className="text-base">{phase.icon}</span>
        {phase.title}
      </h3>
      
      {phase.items && (
        <ul className="space-y-2">
          {phase.items.map((item, i) => (
            <li key={i} className="text-gray-300 text-sm leading-relaxed">• {item}</li>
          ))}
        </ul>
      )}

      {phase.sections && phase.sections.map((section, sIndex) => (
        <RoadmapSection key={sIndex} section={section} />
      ))}
    </div>
  );
};

export default RoadmapPhase;