import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const PurchaseForm = () => {
  const [amount, setAmount] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Purchase Initiated",
      description: `Purchasing ${amount} Buttcheeks tokens...`,
    });
  };

  return (
    <Card className="glass p-6 w-full max-w-md">
      <h3 className="text-xl font-bold mb-4 text-center">Buy Buttcheeks</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          type="submit"
          className="w-full bg-dark-accent hover:bg-dark-accent/90 transition-all duration-300 transform hover:scale-[1.02]"
        >
          Purchase Now
        </Button>
      </form>
    </Card>
  );
};