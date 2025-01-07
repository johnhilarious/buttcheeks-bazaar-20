import React, { useEffect, useState } from 'react';

const images = [
  '/buttcheeks.png',
  // We're using the same image multiple times for now
  // These can be replaced with different GIF URLs later
  '/buttcheeks.png',
  '/buttcheeks.png',
];

type Position = {
  x: number;
  y: number;
  rotation: number;
  duration: number;
  delay: number;
  scale: number;
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
      x: startX,
      y: startY,
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

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((pos, index) => (
        <img
          key={index}
          src={images[index % images.length]}
          alt="Flying"
          className="absolute w-16 h-16 object-contain opacity-30"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg) scale(${pos.scale})`,
            transition: `transform ${pos.duration}s linear ${pos.delay}s`,
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