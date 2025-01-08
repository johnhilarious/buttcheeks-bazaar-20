import React from "react";

const RoadmapFooter = () => {
  return (
    <div className="mt-8 pt-6 border-t border-dark-accent/20">
      <p className="text-sm text-gray-300">
        Want more details?{" "}
        <a 
          href="https://shorturl.at/bw4BD" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-dark-accent hover:text-dark-accent/80 transition-colors"
        >
          View full roadmap
        </a>
        {" "}or{" "}
        <a 
          href="https://t.me/buttcheekscoinsol" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-dark-accent hover:text-dark-accent/80 transition-colors"
        >
          reach out on Telegram!
        </a>
      </p>
    </div>
  );
};

export default RoadmapFooter;