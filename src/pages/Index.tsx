import React, { useEffect, useState } from "react";
import { MessageCircle, Twitter } from "lucide-react";
import RoadmapContent from "../components/RoadmapContent";
import AnimatedText from "../components/AnimatedText";
import { Helmet } from "react-helmet";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Buttcheeks Coin",
  "description": "The Cheekiest Memecoin on Solana",
  "url": "https://buttcheekscoin.com",
  "logo": "https://buttcheekscoin.com/buttcheeks.png",
  "sameAs": [
    "https://twitter.com/buttcheekscoin",
    "https://t.me/buttcheekscoinsol"
  ]
};

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "$buttcheeks completes the H🍩ly Trinity of Crypto.\nHere to cover your $butthole and make your $farts roar, $buttcheeks is the cheekiest opportunity of your life time.\nJoin the movement, relax, and let's moon those $buttcheeks together! PS: We're also working on a marketplace that lets you share your cheeks and win the finest audience, that's a {BILLION} of times the utility of $butthole. We're about to leave their asses to ashes and start clapping!";
  const CONTRACT_ADDRESS = "BpComQ8aVVc9iQJKR6Lu77CTw4jGY7x2ZibFWJsapump";
  
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
    <>
      <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
        <title>Buttcheeks Coin | The Cheekiest Memecoin on Solana</title>
        <meta name="description" content="Join the cheekiest movement on Solana! Buttcheeks Coin - Part of the H🍩ly Trinity of crypto. Buy, trade and earn with the most entertaining memecoin." />
      </Helmet>
      <main className="min-h-screen flex flex-col">
        <article className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-black relative">
          <aside className="hidden xl:block fixed left-8 top-12 w-[380px] max-h-[85vh] bg-black/50 backdrop-blur-sm rounded-xl border border-dark-accent/20">
          <h2 className="text-xl font-bold text-dark-accent p-6 pb-4 text-center font-mono sticky top-0 bg-black/50 backdrop-blur-sm border-b border-dark-accent/20 z-10">
            Marketing Roadmap
          </h2>
            <nav className="p-6 pt-4 overflow-y-auto max-h-[calc(85vh-80px)] custom-scrollbar">
            <RoadmapContent />
            </nav>
          </aside>

        <div className="max-w-4xl mx-auto xl:ml-[420px] xl:mr-auto">
          <div className="text-center space-y-12">
            <div className="w-24 h-24 mx-auto bg-dark-accent rounded-full animate-float flex items-center justify-center">
                <span className="text-4xl" role="img" aria-label="Peach emoji">🍑</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold flex items-center justify-center">
              <a
                href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                  aria-label="View Buttcheeks coin on DexScreener"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/buttcheeks.png"
                    alt="Buttcheeks Logo"
                  loading="lazy"
                    className="h-12 sm:h-20"
                  />
                </a>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-dark-accent text-3xl sm:text-5xl -ml-[10px]">
                  coin
                </span>
              </h1>

              <div className="relative">
                <AnimatedText displayText={displayText} CONTRACT_ADDRESS={CONTRACT_ADDRESS} />
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 pt-4">
                <a
                  href="https://t.me/buttcheekscoinsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join our Telegram community"
                  className="flex items-center gap-3 text-white hover:text-dark-accent transition-colors text-lg animate-float w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-6 h-6" aria-hidden="true" />
                  <span>Join Telegram</span>
                </a>

                <div className="space-y-1 animate-float1 w-full sm:w-auto">
                  <a
                    href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                    aria-label="Buy Buttcheeks coin on DexScreener"
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
                  aria-label="Follow us on Twitter"
                  className="flex items-center gap-3 text-white hover:text-dark-accent transition-colors text-lg animate-float2 w-full sm:w-auto justify-center"
          >
                  <Twitter className="w-6 h-6" aria-hidden="true" />
                  <span>Follow Twitter</span>
                </a>
              </div>

              <div className="block xl:hidden mt-16 relative">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl border border-dark-accent/20 max-w-3xl mx-auto">
                  <h2 className="text-xl font-bold text-dark-accent p-6 pb-4 text-center font-mono sticky top-0 bg-black/50 backdrop-blur-sm border-b border-dark-accent/20 z-10">
                    Marketing Roadmap
                  </h2>
                  <div className="p-8 pt-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <RoadmapContent />
        </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <footer className="w-full flex justify-end">
          <div className="text-xs text-gray-500 px-4 pb-4">
            Made with <span className="text-dark-accent" role="img" aria-label="love">❤️</span> - Admin{" "}
            <a 
              href="https://x.com/JohnHilarious"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit JohnHilarious on Twitter"
              className="text-[#1DA1F2] hover:text-[#1DA1F2]/80 transition-colors"
            >
              JohnHilarious
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;