import { PriceCard } from "@/components/PriceCard";
import { PurchaseForm } from "@/components/PurchaseForm";
import { Stats } from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-dark-accent rounded-full animate-float flex items-center justify-center">
            <span className="text-4xl">🍑</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-dark-accent">
            ButtCheeks Coin
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The most cheeky cryptocurrency in the market. Don't just sit there, grab some ButtCheeks!
          </p>
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