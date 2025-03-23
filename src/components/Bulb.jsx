import { useEffect, useState } from "react";

export default function Bulb() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    // Auto ON/OFF every 5 seconds
    const interval = setInterval(() => {
      setIsOn((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`fixed top-1 left-1/13 transform -translate-x-1/2 flex flex-col items-center cursor-pointer transition-all duration-500 ${
        isOn ? "bg-transparent" : "bg-transparent"
      }`}
      onClick={toggleLight}
    >
      {/* Hanging Wire */}
      <div className="w-1 h-28 bg-gray-500 rounded-full"></div>

      {/* Light Bulb */}
      <div
        className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${
          isOn
            ? "bg-yellow-300 shadow-[0_0_60px_rgba(255,223,0,0.8)]"
            : "bg-gray-600 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        }`}
        style={{
          background: isOn
            ? "radial-gradient(circle, rgba(255, 223, 0, 1) 40%, rgba(255, 200, 0, 1) 100%)"
            : "linear-gradient(to bottom, #444, #111)",
        }}
      >
        {/* Subtle Glow Effect (Not covering full page) */}
        {isOn && (
          <div className="absolute inset-0 w-full h-full bg-yellow-200 opacity-10 blur-xl transition-all duration-700"></div>
        )}

        {/* Bulb Base */}
        <div className="absolute bottom-[-8px] w-6 h-3 bg-gray-800 rounded-t-md"></div>
      </div>

      {/* Background Overlay for Dim Glow (Prevents white issue) */}
      {isOn && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 transition-all duration-700 pointer-events-none"></div>
      )}
    </div>
  );
}
