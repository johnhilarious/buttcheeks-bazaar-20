import { Card } from "@/components/ui/card";

export const Stats = () => {
  const stats = [
    { label: "Market Cap", value: "$420,690" },
    { label: "Holders", value: "6,942" },
    { label: "Total Supply", value: "1T" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
      {stats.map((stat) => (
        <Card key={stat.label} className="glass p-4 animate-float" style={{animationDelay: Math.random() + 's'}}>
          <p className="text-sm text-gray-400">{stat.label}</p>
          <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
        </Card>
      ))}
    </div>
  );
};