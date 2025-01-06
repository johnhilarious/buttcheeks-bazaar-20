import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Twitter } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export const Stats = () => {
  const CONTRACT_ADDRESS = "55lcyqsa4zb1md3soq6bejrpfxchmv3dwps5blxgcjpd";
  
  // Fetch token data from Jupiter API
  const { data: tokenData } = useQuery({
    queryKey: ['tokenInfo'],
    queryFn: async () => {
      const response = await fetch(`https://price.jup.ag/v4/price?ids=${CONTRACT_ADDRESS}`);
      if (!response.ok) {
        throw new Error('Failed to fetch token data');
      }
      return response.json();
    }
  });

  const stats = [
    { 
      label: "Market Cap", 
      value: tokenData?.data?.[CONTRACT_ADDRESS]?.price 
        ? `$${(Number(tokenData.data[CONTRACT_ADDRESS].price) * 1000000000).toLocaleString()}`
        : "$420,690" 
    },
    { 
      label: "Buy ButtCheeks", 
      value: "View on Dexscreener",
      link: `https://dexscreener.com/solana/${CONTRACT_ADDRESS}`,
      icon: <ExternalLink className="w-4 h-4" />
    },
    { 
      label: "Total Supply", 
      value: "1T" 
    },
  ];

  return (
    <div className="space-y-6 w-full max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {stats.map((stat) => (
          <Card key={stat.label} className="glass p-4 animate-float" style={{animationDelay: Math.random() + 's'}}>
            <p className="text-sm text-gray-400">{stat.label}</p>
            {stat.link ? (
              <a 
                href={stat.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-2xl font-bold text-white mt-1 hover:text-gray-300 transition-colors"
              >
                {stat.value} {stat.icon}
              </a>
            ) : (
              <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
            )}
          </Card>
        ))}
      </div>

      {/* Contract Address and Socials */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-sm text-gray-400">
          CA: <span className="font-mono">{CONTRACT_ADDRESS}</span>
        </p>
        <div className="flex gap-4">
          <a
            href="https://t.me/buttcheekscoinsol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Telegram
          </a>
          <a
            href="https://x.com/buttcheekscoin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            <Twitter className="w-5 h-5" />
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};