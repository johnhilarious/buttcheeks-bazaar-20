import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

export const PriceCard = () => {
  const [price, setPrice] = useState(0.00000123);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 0.00000001;
      setPrice((prev) => +(prev + change).toFixed(8));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="glass p-6 w-full max-w-sm animate-float">
      <p className="text-sm text-gray-400 mb-2">Current Price</p>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-white">${price}</span>
        <span className="text-green-400 text-sm">+2.4%</span>
      </div>
    </Card>
  );
};