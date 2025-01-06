import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ExternalLink, MessageCircle, Twitter } from "lucide-react";

export const PurchaseForm = () => {
  const [amount, setAmount] = useState("");
  const [tokenInfo, setTokenInfo] = useState<any>(null);
  const { toast } = useToast();

  const CONTRACT_ADDRESS = "55lcyqsa4zb1md3soq6bejrpfxchmv3dwps5blxgcjpd";
  const DEXSCREENER_URL = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}`;
  const TELEGRAM_URL = "https://t.me/buttcheekscoinsol";
  const TWITTER_URL = "https://x.com/buttcheekscoin";

  useEffect(() => {
    const fetchTokenInfo = async () => {
      try {
        const response = await fetch(`https://api.solscan.io/v2/token/meta?token_address=${CONTRACT_ADDRESS}`, {
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0',
          }
        });
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        setTokenInfo(data.data);
        console.log("Token info:", data);
      } catch (error) {
        console.error("Error fetching token info:", error);
        toast({
          title: "Notice",
          description: "Token information temporarily unavailable",
        });
      }
    };

    fetchTokenInfo();
  }, [toast]);

  const handleBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(DEXSCREENER_URL, '_blank');
    toast({
      title: "Redirecting to DEXScreener",
      description: "You will be redirected to purchase ButtCheeks tokens...",
    });
  };

  return (
    <Card className="glass p-6 w-full max-w-md">
      <h3 className="text-xl font-bold mb-4 text-center">Buy ButtCheeks</h3>
      
      <div className="mb-6 text-sm text-gray-400 break-all">
        <p className="mb-2">Contract Address:</p>
        <code className="bg-black/30 p-2 rounded text-xs">{CONTRACT_ADDRESS}</code>
      </div>

      <form className="space-y-4">
        <div>
          <label className="text-sm text-gray-400">Amount (USD)</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 bg-dark-secondary/50 border-white/10"
            placeholder="Enter amount"
          />
        </div>
        <Button
          onClick={handleBuy}
          className="w-full bg-dark-accent hover:bg-dark-accent/90 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
        >
          Buy on DEXScreener
          <ExternalLink className="w-4 h-4" />
        </Button>

        <div className="pt-4 border-t border-white/10 mt-4">
          <p className="text-sm text-gray-400 mb-3">Join our community:</p>
          <div className="flex gap-3 justify-center">
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-white/10"
              onClick={() => window.open(TELEGRAM_URL, '_blank')}
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-white/10"
              onClick={() => window.open(TWITTER_URL, '_blank')}
            >
              <Twitter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {tokenInfo && (
          <div className="pt-4 border-t border-white/10 mt-4 text-sm text-gray-400">
            <p className="mb-2">Token Information:</p>
            <div className="bg-black/30 p-3 rounded text-xs">
              <p>Symbol: {tokenInfo.symbol || 'N/A'}</p>
              <p>Decimals: {tokenInfo.decimals || 'N/A'}</p>
              <p>Supply: {tokenInfo.supply || 'N/A'}</p>
            </div>
          </div>
        )}
      </form>
    </Card>
  );
};