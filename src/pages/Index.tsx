import { useEffect, useState } from "react";
import { MessageCircle, Twitter } from "lucide-react";

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "First, there was $FART, a pioneer. Then came $butthole, pushing boundaries further. But you don't get a hole without its fart, and you don't get a fart without its buttcheeks! Now, ButtCheeks completes the Holy Trinity of crypto. Built on cutting-edge blockchain technology, ButtCheeks represents the perfect fusion of humor and serious gains. Join the movement and become part of the most cheeky community in crypto.";
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

  const renderTextWithLink = (text: string) => {
    return text.split('ButtCheeks').map((part, index, array) => {
      if (index < array.length - 1) {
        return (
          <>
            {part}
            <a
              href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-accent underline hover:text-dark-accent/80"
            >
              ButtCheeks
            </a>
          </>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="w-24 h-24 mx-auto bg-dark-accent rounded-full animate-float flex items-center justify-center">
            <span className="text-4xl">🍑</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold flex items-center justify-center gap-3">
            <img 
              src="/buttcheeks.png" 
              alt="ButtCheeks" 
              className="h-12 sm:h-20"
            />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-dark-accent">
              Coin
            </span>
          </h1>
          <div className="relative">
            <p className="text-green-400 font-mono text-sm sm:text-base max-w-2xl mx-auto min-h-[8rem] sm:min-h-[6rem]">
              {renderTextWithLink(displayText)}
              <span className="animate-pulse">_</span>
            </p>
          </div>

          {/* Social Links and Buy Button Row */}
          <div className="flex justify-center items-center gap-8 pt-4">
            <a
              href="https://t.me/buttcheekscoinsol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-dark-accent transition-colors text-xl animate-float"
            >
              <MessageCircle className="w-8 h-8" />
              <span>Join Telegram</span>
            </a>
            
            <div className="space-y-1 animate-float">
              <a
                href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-dark-accent hover:bg-dark-accent/90 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                Buy Now
              </a>
              <div className="text-sm text-gray-500">(dexscreener)</div>
            </div>

            <a
              href="https://x.com/buttcheekscoin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-dark-accent transition-colors text-xl animate-float"
            >
              <Twitter className="w-8 h-8" />
              <span>Follow Twitter</span>
            </a>
          </div>

          {/* Coming Soon Announcement */}
          <div className="text-center animate-pulse">
            <div className="inline-block bg-gradient-to-r from-dark-accent/20 to-dark-accent/10 rounded-lg px-6 py-3">
              <span className="text-dark-accent font-bold">🏆 Coming Tomorrow:</span>
              <span className="text-white ml-2">ButtCheeks Leaderboard - Who's Got The Cheekiest of them all?</span>
            </div>
          </div>

          {/* Contract Address */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Contract Address: <span className="font-mono">{CONTRACT_ADDRESS}</span>
            </p>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Index;