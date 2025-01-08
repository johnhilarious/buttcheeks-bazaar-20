import React from "react";

interface RoadmapSectionProps {
  section: {
    subtitle: string;
    items: string[];
  };
}

const RoadmapSection = ({ section }: RoadmapSectionProps) => {
  return (
    <div className="mb-4 last:mb-0">
      <h4 className="text-sm font-semibold text-dark-accent/80 mb-2">{section.subtitle}</h4>
      <ul className="space-y-2">
        {section.items.map((item, i) => (
          <li key={i} className="text-gray-300 text-sm leading-relaxed">• {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapSection;