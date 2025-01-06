import { PriceCard } from "@/components/PriceCard";
import { PurchaseForm } from "@/components/PurchaseForm";
import { Stats } from "@/components/Stats";
import { useEffect, useState } from "react";

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "First there was $FART, the pioneer of meme coins. Then came $HOLE, pushing boundaries further. But what is a butt without its cheeks? Now, ButtCheeks completes the Holy Trinity of crypto. Built on cutting-edge blockchain technology, ButtCheeks represents the perfect fusion of humor and serious gains. Join the movement and become part of the most cheeky community in crypto.";
  
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
        <div className="text-center space-y-4">
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
        </div>

        {/* Price Section */}
        <div className="flex justify-center">
          <PriceCard />
        </div>

        {/* Stats Section */}
        <div className="flex justify-center">
          <Stats />
        </div>

        {/* Purchase Form */}
        <div className="flex justify-center">
          <PurchaseForm />
        </div>
      </div>
    </div>
  );
};

export default Index;