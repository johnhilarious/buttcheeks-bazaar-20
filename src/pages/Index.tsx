import React from "react";
import { useEffect, useState } from "react";
import { MessageCircle, Twitter } from "lucide-react";

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
            "Regular Posting ✅",
            "Daily SneakPeak ✅",
            "Peachy meme & stickers sharing ✅",
          ]
        },
        {
          subtitle: "Credibility & Visibility",
          items: [
            "Raydium  ✅",
            "Twitter verified ✅",
            "Moderate Contest Participation",
            "CoinMarketCap listing",
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
            "Small / Medium Kols",
            "Partner with adult content creators",
            "Launch exclusive promotions",
            "Create content creator rewards"
          ]
        },
        {
          subtitle: "Community Events",
          items: [
            "Voice/Video Chat on Telegram",
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
            "Press coverage push",
            "Viral marketing initiatives"
          ]
        },
        {
          subtitle: "Advanced Marketing",
          items: [
            "Professional PR campaigns",
            "Strategic billboard placements",
            "BlueCheck Mark Twitter raids",
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

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "$buttcheeks completes the H🍩ly Trinity of crypto. \n Here to cover your $butthole and make your $farts roar, $buttcheeks is the most undervalued opportunity of the year (but not for long). \n We're working on a marketplace that lets you share your cheeks and win the finest audience. With {BILLION} of times the utility of $butthole, we're about to leave their butts to dust and start clapping. Join the movement, relax, and become part of the soon-to-be cheekiest community in crypto. Let's moon those $buttcheeks together — we're about to release greatness!";
  const CONTRACT_ADDRESS = "DGjXz3xPKiBKr8sLtpDJmRgYXgMDEKtiKPzHzyuXpump";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const renderTextWithLink = (text) => {
    return text.split('$buttcheeks').map((part, index, array) => {
      if (index < array.length - 1) {
        return (
          <React.Fragment key={index}>
            {part.split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
            <a
              href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
              target="_blank" 
          rel="noopener noreferrer"
              className="text-dark-accent underline hover:text-dark-accent/80"
        >
              Buttcheeks
            </a>
          </React.Fragment>
        );
      }
      return part.split('\n').map((line, i, arr) => (
        <React.Fragment key={`${index}-${i}`}>
          {line}
          {i < arr.length - 1 && <br />}
        </React.Fragment>
      ));
    });
  };

  const renderWavyBillion = () => {
    return (
      <span className="inline-flex">
        {'billions'.split('').map((letter, i) => (
          <span
            key={i}
            className="text-cyan-400 inline-block animate-wave"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: '2s'
            }}
            >
            {letter}
          </span>
        ))}
      </span>
    );
  };

  const renderTextWithBillionAndLinks = (text) => {
    const parts = text.split('{BILLION}');
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {renderTextWithLink(part)}
        {index < parts.length - 1 && renderWavyBillion()}
      </React.Fragment>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-black relative">
        {/* Desktop Roadmap */}
        <div className="hidden xl:block fixed left-8 top-12 w-[320px] max-h-[85vh] bg-black/50 backdrop-blur-sm rounded-xl border border-dark-accent/20">
          <h2 className="text-xl font-bold text-dark-accent p-6 pb-4 text-center font-mono sticky top-0 bg-black/50 backdrop-blur-sm border-b border-dark-accent/20 z-10">
            Marketing Roadmap
          </h2>
          <div className="p-6 pt-4 overflow-y-auto max-h-[calc(85vh-80px)] custom-scrollbar">
            <RoadmapContent />
          </div>
        </div>

        <div className="max-w-3xl mx-auto xl:ml-[380px] xl:mr-auto lg:max-w-2xl">
          <div className="text-center space-y-8">
          <div className="w-24 h-24 mx-auto bg-dark-accent rounded-full animate-float flex items-center justify-center">
            <span className="text-4xl">🍑</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold flex items-center justify-center">
            <a
              href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/buttcheeks.png"
                alt="ButtCheeks"
                className="h-12 sm:h-20"
              />
            </a>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-dark-accent text-3xl sm:text-5xl -ml-[10px]">
              coin
            </span>
          </h1>

          <div className="relative">
            <p className="text-green-400 font-mono text-sm sm:text-base mx-auto min-h-[8rem] sm:min-h-[6rem]">
              {renderTextWithBillionAndLinks(displayText)}
              <span className="animate-pulse">_</span>
            </p>
          </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 pt-4 flex-wrap">
            <a
              href="https://t.me/buttcheekscoinsol"
              target="_blank"
              rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-dark-accent transition-colors text-lg animate-float w-full sm:w-auto justify-center"
            >
                <MessageCircle className="w-6 h-6" />
              <span>Join Telegram</span>
            </a>

            <div className="space-y-1 animate-float1 w-full sm:w-auto">
              <a
                href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                  className="inline-block bg-dark-accent hover:bg-dark-accent/90 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto"
              >
                Buy Now
              </a>
                <div className="text-xs text-gray-500">(dexscreener)</div>
            </div>

            <a
              href="https://x.com/buttcheekscoin"
              target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-white hover:text-dark-accent transition-colors text-lg animate-float2 w-full sm:w-auto justify-center"
            >
                <Twitter className="w-6 h-6" />
              <span>Follow Twitter</span>
            </a>
          </div>

            {/* Mobile/Tablet Roadmap */}
            <div className="block xl:hidden mt-16 relative">
              <div className="bg-black/50 backdrop-blur-sm rounded-xl border border-dark-accent/20 max-w-2xl mx-auto">
                <h2 className="text-xl font-bold text-dark-accent p-6 pb-4 text-center font-mono sticky top-0 bg-black/50 backdrop-blur-sm border-b border-dark-accent/20 z-10">
                  Marketing Roadmap
                </h2>
                <div className="p-6 pt-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
                  <RoadmapContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <div className="text-xs text-gray-500 px-4 pb-4">
          Made with <span className="text-dark-accent">❤️</span> - Admin {" "}
          <a 
            href="https://x.com/JohnHilarious"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1DA1F2] hover:text-[#1DA1F2]/80 transition-colors"
          >
            JohnHilarious
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
