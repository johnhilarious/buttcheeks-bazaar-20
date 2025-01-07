import React from "react";
import { useEffect, useState } from "react";
import { MessageCircle, Twitter } from "lucide-react";
// import ShootingImages from "../components/ShootingImages";

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

  const renderTextWithLink = (text: string) => {
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

  const renderTextWithBillionAndLinks = (text: string) => {
    const parts = text.split('{BILLION}');
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {renderTextWithLink(part)}
        {index < parts.length - 1 && renderWavyBillion()}
      </React.Fragment>
    ));
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black relative">
      {/* <ShootingImages /> */}
      <div className="max-w-7xl mx-auto space-y-12">
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
            <p className="text-green-400 font-mono text-sm sm:text-base max-w-2xl mx-auto min-h-[8rem] sm:min-h-[6rem]">
              {renderTextWithBillionAndLinks(displayText)}
              <span className="animate-pulse">_</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 pt-4">
            <a
              href="https://t.me/buttcheekscoinsol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-dark-accent transition-colors text-lg sm:text-xl animate-float w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-6 sm:w-8 h-6 sm:h-8" />
              <span>Join Telegram</span>
            </a>

            <div className="space-y-1 animate-float1 w-full sm:w-auto">
              <a
                href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-dark-accent hover:bg-dark-accent/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-lg sm:text-xl transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto"
              >
                Buy Now
              </a>
              <div className="text-xs sm:text-sm text-gray-500">(dexscreener)</div>
            </div>

            <a
              href="https://x.com/buttcheekscoin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-dark-accent transition-colors text-lg sm:text-xl animate-float2 w-full sm:w-auto justify-center"
            >
              <Twitter className="w-6 sm:w-8 h-6 sm:h-8" />
              <span>Follow Twitter</span>
            </a>
          </div>

          <div className="text-center animate-pulse">
            <div className="inline-block bg-gradient-to-r from-dark-accent/20 to-dark-accent/10 rounded-lg px-6 py-3">
              <span className="text-dark-accent font-bold">🏆 Alpha board: Release 11:59PM EST - 7TH January</span>
              <span className="text-white ml-2">ButtCheeks Leaderboard - Who&apos;s Got The Cheekiest of them all?</span>
            </div>
          </div>

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