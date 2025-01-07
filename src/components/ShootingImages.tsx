import React, { useEffect, useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=200&h=200',
  'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200',
  'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200',
];

type Position = {
  x: number;
  y: number;
  rotation: number;
};

const ShootingImages = () => {
  const [elements, setElements] = useState<Position[]>([]);

  const generateRandomPosition = (): Position => {
    // Start from left side, move to right
    return {
      x: -100,
      y: Math.random() * window.innerHeight,
      rotation: Math.random() * 360,
    };
  };

  useEffect(() => {
    const spawnImage = () => {
      setElements(prev => {
        if (prev.length >= 3) return prev; // Limit to 3 images at a time
        return [...prev, generateRandomPosition()];
      });
    };

    const interval = setInterval(spawnImage, 2000); // Spawn new image every 2 seconds
    spawnImage(); // Spawn first image immediately

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((pos, index) => (
        <img
          key={index}
          src={images[index % images.length]}
          alt="Flying"
          className="absolute w-32 h-32 object-cover rounded-full opacity-70"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`,
            transition: 'transform 4s linear',
          }}
          onLoad={(e) => {
            const img = e.currentTarget;
            requestAnimationFrame(() => {
              img.style.transform = `translate(${window.innerWidth + 100}px, ${pos.y}px) rotate(${pos.rotation}deg)`;
            });
          }}
          onTransitionEnd={() => {
            setElements(prev => prev.filter((_, i) => i !== index));
          }}
        />
      ))}
    </div>
  );
};

export default ShootingImages;