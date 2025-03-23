import React, { useEffect, useState } from "react";

export default function Ghost() {
  const [position, setPosition] = useState({
    x: Math.random() * (window.innerWidth - 100),
    y: Math.random() * (window.innerHeight - 200),
    dx: (Math.random() > 0.5 ? 1 : -1) * (0.5 + Math.random()),
    dy: (Math.random() > 0.5 ? 1 : -1) * (0.5 + Math.random()),
    floatOffset: 0,
  });

  useEffect(() => {
    const moveGhost = () => {
      setPosition((prev) => {
        let newX = prev.x + prev.dx;
        let newY = prev.y + prev.dy + Math.sin(prev.floatOffset) * 2;
        let newDX = prev.dx;
        let newDY = prev.dy;
        let newFloatOffset = prev.floatOffset + 0.1;

        if (newX <= 10 || newX >= window.innerWidth - 110) newDX = -newDX;
        if (newY <= 10 || newY >= window.innerHeight - 210) newDY = -newDY;

        return { x: newX, y: newY, dx: newDX, dy: newDY, floatOffset: newFloatOffset };
      });
    };

    const animation = setInterval(moveGhost, 20);
    return () => clearInterval(animation);
  }, []);

  return (
    <div
      className="absolute transition-all duration-100 ease-linear"
      style={{
        left: position.x,
        top: position.y,
        filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 20px rgba(173, 216, 230, 0.6))",
      }}
    >
      {/* Ghost Body */}
      <div className="w-12 h-14 bg-white rounded-t-full relative shadow-xl opacity-90">
        {/* Glowing Aura */}
        <div className="absolute inset-0 bg-white blur-xl opacity-50"></div>

        {/* Wavy Bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 bg-white rounded-full opacity-90"
              style={{ transform: `translateY(${i % 2 === 0 ? "4px" : "-4px"})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}