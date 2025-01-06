import { useEffect, useState } from "react";
import { MessageCircle, Twitter } from "lucide-react";

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "First there was $FART, the pioneer of meme coins. Then came $HOLE, pushing boundaries further. But what is a butt without its cheeks? Now, ButtCheeks completes the Holy Trinity of crypto. Built on cutting-edge blockchain technology, ButtCheeks represents the perfect fusion of humor and serious gains. Join the movement and become part of the most cheeky community in crypto.";
  const CONTRACT_ADDRESS = "55lcyqsa4zb1md3soq6bejrpfxchmv3dwps5blxgcjpd";
  
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

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="w-24 h-24 mx-auto bg-dark-accent rounded-full animate-float flex items-center justify-center">
            <span className="text-4xl">🍑</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-dark-accent">
            ButtCheeks Coin
          </h1>
          <div className="relative">
            <p className="text-green-400 font-mono text-sm sm:text-base max-w-2xl mx-auto h-32 sm:h-28 overflow-hidden">
              {displayText}
              <span className="animate-pulse">_</span>
            </p>
          </div>

          {/* Buy Button */}
          <a
            href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dark-accent hover:bg-dark-accent/90 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            Buy Now
          </a>

          {/* Contract Address */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Contract Address: <span className="font-mono">{CONTRACT_ADDRESS}</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 pt-4">
            <a
              href="https://t.me/buttcheekscoinsol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-dark-accent transition-colors text-xl"
            >
              <MessageCircle className="w-8 h-8" />
              <span>Join Telegram</span>
            </a>
            <a
              href="https://x.com/buttcheekscoin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-dark-accent transition-colors text-xl"
            >
              <Twitter className="w-8 h-8" />
              <span>Follow Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;