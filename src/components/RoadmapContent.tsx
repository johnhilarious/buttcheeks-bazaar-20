import React from "react";

const RoadmapContent = () => {
  const phases = [
    {
      icon: "✅",
      title: "Phase 1: Launch Foundation",
      items: [
        "Set up social channels ✅",
        "Basic website deployment ✅", 
        "Initial community building ✅",
        "Deploy on Solana & set up liquidity ✅",
        "AntiBot Measures ⌛"
      ]
    },
    {
      icon: "🚀", 
      title: "Phase 2: Initial Push",
      sections: [
        {
          subtitle: "Community Building",
          items: [
            "Twitter raid coordination ✅",
            "Regular posting ✅",
            "Daily dev sneakpeak ✅",
            "Peachy meme & stickers sharing ✅",
          ]
        },
        {
          subtitle: "Credibility & Visibility",
          items: [
            "Raydium  ✅",
            "Twitter verified ✅",
            "contest participation ⌛",
            "CoinMarketCap listing⌛",
            "CoinGecko listing",
            "Birdeye verification"
          ]
        }
      ]
    },
    {
      icon: "🌍",
      title: "Phase 3: Expansion",
      sections: [
        {
          subtitle: "Enhanced Promotion",
          items: [
            "Daily meme competitions", 
            "Community rewards program",
            "Targeted crypto ad campaigns",
            "Coordinated trending campaigns",
            "Solana ecosystem partnerships"
          ]
        },
        {
          subtitle: "Content Creator Program",
          items: [
            "Small/Medium level Kols",
            "Partner with adult content creators",
            "Launch exclusive promotions",
            "Create content creator rewards"
          ]
        },
        {
          subtitle: "Community Events",
          items: [
            "Voice/Video chat on Telegram",
            "Weekly Twitter spaces",
            "Meme contests with major prizes",
            "Interactive community events"
          ]
        }
      ]
    },
    {
      icon: "👑",
      title: "Phase 4: Mainstream Push", 
      sections: [
        {
          subtitle: "Exchange & Visibility",
          items: [
            "CEX listing campaigns",
            "Major KOL partnerships",
            "Buttcheks NFT Collection",
            "Viral marketing initiatives"
          ]
        },
        {
          subtitle: "Advanced Marketing",
          items: [
            "Professional PR campaigns",
            "Strategic billboard placements",
            "BlueCheckMark Twitter raids",
            "Twitter wide meme contests"
          ]
        }
      ]
    }
  ];

  return (
    <>
      {phases.map((phase, index) => (
        <div key={index} className="mb-8 last:mb-0">
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
            <div key={sIndex} className="mb-4 last:mb-0">
              <h4 className="text-sm font-semibold text-dark-accent/80 mb-2">{section.subtitle}</h4>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm leading-relaxed">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default RoadmapContent;
