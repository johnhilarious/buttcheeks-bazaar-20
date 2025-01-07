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
  duration: number;
  delay: number;
  scale: number;
  startX: number;
  startY: number;
};

const ShootingImages = () => {
  const [elements, setElements] = useState<Position[]>([]);

  const generateRandomPosition = (): Position => {
    // Randomly choose a corner (0: top-left, 1: top-right, 2: bottom-left, 3: bottom-right)
    const corner = Math.floor(Math.random() * 4);
    const startX = corner % 2 === 0 ? -100 : window.innerWidth + 100;
    const startY = corner < 2 ? -100 : window.innerHeight + 100;
    
    // Calculate end position (opposite corner)
    const endX = corner % 2 === 0 ? window.innerWidth + 100 : -100;
    const endY = corner < 2 ? window.innerHeight + 100 : -100;

    return {
      x: endX,
      y: endY,
      startX,
      startY,
      rotation: Math.random() * 360,
      duration: 3 + Math.random() * 2, // 3-5 seconds
      delay: Math.random() * 2, // 0-2 seconds
      scale: 0.5 + Math.random() * 0.5, // 0.5-1.0 scale
    };
  };

  useEffect(() => {
    const spawnImage = () => {
      setElements(prev => {
        if (prev.length >= 5) return prev; // Limit to 5 images at a time
        return [...prev, generateRandomPosition()];
      });
    };

    const interval = setInterval(spawnImage, 2000); // Spawn new image every 2 seconds
    spawnImage(); // Spawn first image immediately

    return () => clearInterval(interval);
  }, []);

  console.log('Current elements:', elements); // Debug log

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((pos, index) => (
        <img
          key={index}
          src={images[index % images.length]}
          alt="Flying"
          className="absolute w-24 h-24 object-cover rounded-full opacity-50"
          style={{
            transform: `translate(${pos.startX}px, ${pos.startY}px) rotate(${pos.rotation}deg) scale(${pos.scale})`,
            transition: `transform ${pos.duration}s linear ${pos.delay}s`,
          }}
          onTransitionEnd={() => {
            setElements(prev => prev.filter((_, i) => i !== index));
          }}
          onLoad={(e) => {
            const img = e.currentTarget;
            // Force a reflow to ensure the initial position is set before the animation
            void img.offsetWidth;
            img.style.transform = `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg) scale(${pos.scale})`;
          }}
        />
      ))}
    </div>
  );
};

export default ShootingImages;