import React, { useEffect, useState } from 'react';

const images = [
  // 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=200&h=200',
  // 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200',
  // 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200',
  'peach.png',
  'peach.png',
  'peach.png',
  'peach.png',
  '🍑', // Adding peach emoji
  '🍑', // Adding another peach emoji for variety
  '🍑', // Adding peach emoji
  '🍑', // Adding another peach emoji for variety
  '🍑', // Adding peach emoji
  '🍑', // Adding another peach emoji for variety
  '🍑', // Adding peach emoji
  '🍑', // Adding another peach emoji for variety
  '🍑', // Adding peach emoji
  '🍑', // Adding another peach emoji for variety
];

type Position = {
  x: number;
  y: number;
  rotation: number;
  isEmoji: boolean;
};

const ShootingImages = () => {
  const [elements, setElements] = useState<Position[]>([]);

  const generateRandomPosition = (): Position => {
    const isEmoji = Math.random() > 0.5; // 50% chance of being an emoji
    return {
      x: -100,
      y: Math.random() * (window.innerHeight - 100), // Subtract height to keep within bounds
      rotation: Math.random() * 360,
      isEmoji,
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
      {elements.map((pos, index) => {
        if (pos.isEmoji) {
          return (
            <div
              key={index}
              className="absolute text-6xl"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`,
                transition: 'transform 4s linear',
              }}
              onAnimationEnd={() => {
                setElements(prev => prev.filter((_, i) => i !== index));
              }}
            >
              {images[Math.floor(Math.random() * 2) + 3]} {/* Select randomly between the two peach emojis */}
            </div>
          );
        }
        
        return (
          <img
            key={index}
            src={images[index % 3]} // Use only the first 3 images for non-emoji elements
            alt="Flying"
            className="absolute w-32 h-32 object-cover rounded-full opacity-70"
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`,
              transition: 'transform 4s linear',
            }}
            onLoad={(e) => {
              const element = e.currentTarget;
              requestAnimationFrame(() => {
                element.style.transform = `translate(${window.innerWidth + 200}px, ${pos.y}px) rotate(${pos.rotation + 360}deg)`;
              });
            }}
            onTransitionEnd={() => {
              setElements(prev => prev.filter((_, i) => i !== index));
            }}
          />
        );
      })}
    </div>
  );
};

export default ShootingImages;